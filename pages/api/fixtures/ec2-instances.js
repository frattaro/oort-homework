const ec2InstancesResponse = {
  Reservations: [
    {
      Groups: [],
      Instances: [
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "i-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "j-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "k-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "l-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "m-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "n-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "o-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "p-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "q-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "r-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "s-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "t-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "u-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "v-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "w-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "x-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "y-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "z-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "a-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "b-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "c-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        },
        {
          AmiLaunchIndex: 0,
          ImageId: "ami-0abcdef1234567890",
          InstanceId: "d-1234567890abcdef0",
          InstanceType: "t2.micro",
          KeyName: "MyKeyPair",
          LaunchTime: "2018-05-10T08:05:20.000Z",
          Monitoring: {
            State: "disabled"
          },
          Placement: {
            AvailabilityZone: "us-east-2a",
            GroupName: "",
            Tenancy: "default"
          },
          PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
          PrivateIpAddress: "10.0.0.157",
          ProductCodes: [],
          PublicDnsName: "",
          State: {
            Code: 0,
            Name: "pending"
          },
          StateTransitionReason: "",
          SubnetId: "subnet-04a636d18e83cfacb",
          VpcId: "vpc-1234567890abcdef0",
          Architecture: "x86_64",
          BlockDeviceMappings: [],
          ClientToken: "",
          EbsOptimized: false,
          Hypervisor: "xen",
          NetworkInterfaces: [
            {
              Attachment: {
                AttachTime: "2018-05-10T08:05:20.000Z",
                AttachmentId: "eni-attach-0e325c07e928a0405",
                DeleteOnTermination: true,
                DeviceIndex: 0,
                Status: "attaching"
              },
              Description: "",
              Groups: [
                {
                  GroupName: "MySecurityGroup",
                  GroupId: "sg-0598c7d356eba48d7"
                }
              ],
              Ipv6Addresses: [],
              MacAddress: "0a:ab:58:e0:67:e2",
              NetworkInterfaceId: "eni-0c0a29997760baee7",
              OwnerId: "123456789012",
              PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
              PrivateIpAddress: "10.0.0.157",
              PrivateIpAddresses: [
                {
                  Primary: true,
                  PrivateDnsName: "ip-10-0-0-157.us-east-2.compute.internal",
                  PrivateIpAddress: "10.0.0.157"
                }
              ],
              SourceDestCheck: true,
              Status: "in-use",
              SubnetId: "subnet-04a636d18e83cfacb",
              VpcId: "vpc-1234567890abcdef0",
              InterfaceType: "interface"
            }
          ],
          RootDeviceName: "/dev/xvda",
          RootDeviceType: "ebs",
          SecurityGroups: [
            {
              GroupName: "MySecurityGroup",
              GroupId: "sg-0598c7d356eba48d7"
            }
          ],
          SourceDestCheck: true,
          StateReason: {
            Code: "pending",
            Message: "pending"
          },
          Tags: [],
          VirtualizationType: "hvm",
          CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1
          },
          CapacityReservationSpecification: {
            CapacityReservationPreference: "open"
          },
          MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled"
          }
        }
      ],
      OwnerId: "123456789012",
      ReservationId: "r-02a3f596d91211712"
    }
  ]
};

for (
  let i = 0;
  i < ec2InstancesResponse.Reservations[0].Instances.length;
  i++
) {
  ec2InstancesResponse.Reservations[0].Instances[
    i
  ].PublicIpAddress = `1.1.1.${i}`;
}

export default ec2InstancesResponse;
