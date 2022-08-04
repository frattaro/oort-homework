import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React, { forwardRef, useRef, useState } from "react";

import { useCombinedRefs } from "../hooks";

const TooltipIfTruncated = forwardRef(
  ({ children, component = "div", onOpen, ...rest }, ref) => {
    const rootLeaveTimeout = useRef(null);
    const rootRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, rootRef);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const Component = component;

    return (
      <>
        <Component
          {...rest}
          ref={combinedRef}
          onMouseEnter={(e) => {
            if (!combinedRef.current) return;

            const rootBox = combinedRef.current.getBoundingClientRect();
            const spanBox = combinedRef.current
              .querySelector("span")
              .getBoundingClientRect();

            const rootStyles = window.getComputedStyle(combinedRef.current);
            const linesClamped = !isNaN(
              parseInt(rootStyles["-webkit-line-clamp"])
            );

            if (
              (linesClamped &&
                combinedRef.current.scrollHeight -
                  combinedRef.current.clientHeight >=
                  parseInt(rootStyles["font-size"])) ||
              (!linesClamped &&
                rootBox.width < spanBox.width &&
                rootStyles["text-overflow"] === "ellipsis")
            ) {
              setTooltipOpen(true);
              onOpen && onOpen(e);
            }
          }}
          onMouseLeave={() => {
            rootLeaveTimeout.current = setTimeout(
              () => setTooltipOpen(false),
              30
            );
          }}
        >
          <Tooltip
            disableFocusListener
            disableHoverListener
            disableTouchListener
            open={tooltipOpen}
            title={children}
          >
            <span>{children}</span>
          </Tooltip>
        </Component>
      </>
    );
  }
);

TooltipIfTruncated.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  /**
   * Provides a callback for when the tooltip is opened.
   */
  onOpen: PropTypes.func
};

TooltipIfTruncated.displayName = "TooltipIfTruncated";

export default TooltipIfTruncated;
