import ec2InstancesResponse from "../fixtures/ec2-instances";

const handler = async (req, res) => {
  if (!req.headers.authorization) {
    res.status(400).send();
    return;
  }

  const page = req.body.page || 0;
  const itemsPerPage = req.body.itemsPerPage || 5;
  const offset = page * itemsPerPage;
  const sortModel = req.body.sortModel || {
    field: "id",
    sort: "asc"
  };

  const data = ec2InstancesResponse.Reservations[0].Instances.map((x) => ({
    name: x.RootDeviceName,
    id: x.InstanceId,
    type: x.InstanceType,
    state: x.State.Name,
    az: x.Placement.AvailabilityZone,
    "public IP": x.PublicIpAddress,
    "private IPs": x.NetworkInterfaces.reduce((acc, item) => {
      acc.push(item.PrivateIpAddresses.map((x) => x.PrivateIpAddress));
      return acc;
    }, []).join("; ")
  })).sort((a, b) => {
    if (sortModel.sort === "asc") {
      return a[sortModel.field] > b[sortModel.field]
        ? 1
        : a[sortModel.field] < b[sortModel.field]
        ? -1
        : 0;
    }

    return a[sortModel.field] > b[sortModel.field]
      ? -1
      : a[sortModel.field] < b[sortModel.field]
      ? 1
      : 0;
  });

  res.send({
    totalResults: data.length,
    instances: data.slice(offset, offset + itemsPerPage)
  });
};

export default handler;
