const baseInstance = {
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
};

const ec2InstancesResponse = {
  Reservations: [
    {
      Groups: [],
      Instances: [],
      OwnerId: "123456789012",
      ReservationId: "r-02a3f596d91211712"
    }
  ]
};

const names = [
  "Quarzite",
  "Hrotti",
  "Anansi",
  "Bulwark",
  "Hippo",
  "Theropod",
  "Supernova",
  "Nova",
  "Mastermind",
  "Deluge",
  "Neuranium",
  "Ruby",
  "Everest",
  "Myriad",
  "Obelisk",
  "Topaz",
  "Eagle Eye",
  "Mollusk",
  "Mjolnir",
  "Adamantine",
  "Black-Knight",
  "Hercules",
  "Colossus",
  "Whale",
  "Evolution",
  "Qilin"
];

const instanceTypes = [
  "c5d.2xlarge",
  "c5d.xlarge",
  "m6a.24xlarge",
  "m5dn.xlarge",
  "c5.metal",
  "c6a.8xlarge",
  "d3en.12xlarge",
  "d3en.8xlarge",
  "r5ad.16xlarge",
  "m5a.2xlarge",
  "m5n.metal",
  "c6id.8xlarge",
  "m5ad.2xlarge",
  "m6id.xlarge",
  "c6i.32xlarge",
  "r5b.xlarge",
  "r5n.12xlarge",
  "i2.2xlarge",
  "c5.9xlarge",
  "r5ad.xlarge",
  "r5.metal",
  "m5.24xlarge",
  "m5d.24xlarge",
  "r5n.xlarge",
  "x2idn.32xlarge",
  "p2.16xlarge"
];

const states = ["pending", "running", "stopped"];

const azs = [
  "us-east-2",
  "us-east-1",
  "us-west-1",
  "us-west-2",
  "af-south-1",
  "ap-east-1",
  "ap-southeast-3",
  "ap-south-1",
  "ap-northeast-3",
  "ap-northeast-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-northeast-1",
  "ca-central-1",
  "eu-central-1",
  "eu-west-1",
  "eu-west-2",
  "eu-south-1",
  "eu-west-3",
  "eu-north-1",
  "me-south-1",
  "sa-east-1"
];

for (let i = 0; i < 26; i++) {
  ec2InstancesResponse.Reservations[0].Instances.push({
    ...baseInstance,
    RootDeviceName: `/dev/${names[i].toLowerCase()}`,
    InstanceId: String.fromCharCode(97 + i) + "-1234567890abcdef0",
    InstanceType: instanceTypes[i],
    State: {
      ...baseInstance.State,
      Name: states[i % 3]
    },
    Placement: {
      ...baseInstance.Placement,
      AvailabilityZone: azs[i % 22]
    },
    PublicIpAddress: `63.1.${i}.${i + 55}`,
    NetworkInterfaces: [
      {
        ...baseInstance.NetworkInterfaces[0],
        PrivateIpAddresses: [
          {
            ...baseInstance.NetworkInterfaces[0].PrivateIpAddresses,
            PrivateIpAddress: `10.0.0.${i + 20}`
          }
        ]
      }
    ]
  });
}

export default ec2InstancesResponse;
