export const blockpayFactoryContractAddress =
  "0xdf89C8fE6e18CE552Acba97f37BCF452Af5ccbfc";
export const blockpayFactoryContractABI = [
  {
    inputs: [
      { internalType: "address", name: "_priceFeedAddress", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "TransactionNotSent", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract Blockpay",
        name: "blockPayContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "planName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contractIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "paymentId",
        type: "string",
      },
    ],
    name: "CreatedPaymentPlanBpF",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "paymentId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "firstname",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "lastname",
        type: "string",
      },
      { indexed: false, internalType: "string", name: "email", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
    ],
    name: "ReceivedPaymentBpF",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "planCreator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract Blockpay[]",
        name: "blockpayContract",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnAmount",
        type: "uint256",
      },
    ],
    name: "WithdrawnBpF",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPriceFeedAddress",
        type: "address",
      },
    ],
    name: "changePriceFeedAddressBpf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_maticInWEI", type: "uint256" }],
    name: "conversionRateBpF",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_planName", type: "string" },
      { internalType: "uint256", name: "_amountInUSD", type: "uint256" },
      { internalType: "string", name: "_paymentId", type: "string" },
    ],
    name: "createPaymentBpF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factoryDeployer",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractCreator", type: "address" },
      { internalType: "uint256", name: "_contractIndex", type: "uint256" },
    ],
    name: "getContract",
    outputs: [{ internalType: "contract Blockpay", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_paymentId", type: "string" }],
    name: "getContractById",
    outputs: [{ internalType: "contract Blockpay", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractCreator", type: "address" },
      { internalType: "address", name: "blockpayAddress", type: "address" },
    ],
    name: "getContractIndex",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractCreator", type: "address" },
    ],
    name: "getContractsBalanceBpF",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractCreator", type: "address" },
    ],
    name: "getContractsLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_paymentId", type: "string" }],
    name: "getPaymentPlanBpF",
    outputs: [
      {
        components: [
          { internalType: "string", name: "planName", type: "string" },
          { internalType: "string", name: "paymentId", type: "string" },
          { internalType: "uint256", name: "amountInUSD", type: "uint256" },
          { internalType: "uint256", name: "timeCreated", type: "uint256" },
        ],
        internalType: "struct PaymentPlan",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractCreator", type: "address" },
    ],
    name: "getPaymentplans",
    outputs: [
      {
        components: [
          { internalType: "string", name: "planName", type: "string" },
          { internalType: "string", name: "paymentId", type: "string" },
          { internalType: "uint256", name: "amountInUSD", type: "uint256" },
          { internalType: "uint256", name: "timeCreated", type: "uint256" },
        ],
        internalType: "struct PaymentPlan[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_paymentId", type: "string" },
      { internalType: "address", name: "_user", type: "address" },
    ],
    name: "getPaymentsPerAddressBpF",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "amountInUSD", type: "uint256" },
          { internalType: "string", name: "firstName", type: "string" },
          { internalType: "string", name: "lastName", type: "string" },
          { internalType: "string", name: "email", type: "string" },
          { internalType: "uint256", name: "timeStamp", type: "uint256" },
          { internalType: "string", name: "paymentId", type: "string" },
          { internalType: "address", name: "payer", type: "address" },
        ],
        internalType: "struct Payments[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_contractCreator", type: "address" },
      { internalType: "uint256", name: "_contractIndex", type: "uint256" },
    ],
    name: "getTotalPaymentsBpF",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "amountInUSD", type: "uint256" },
          { internalType: "string", name: "firstName", type: "string" },
          { internalType: "string", name: "lastName", type: "string" },
          { internalType: "string", name: "email", type: "string" },
          { internalType: "uint256", name: "timeStamp", type: "uint256" },
          { internalType: "string", name: "paymentId", type: "string" },
          { internalType: "address", name: "payer", type: "address" },
        ],
        internalType: "struct Payments[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeedAddress",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_paymentId", type: "string" },
      { internalType: "string", name: "_firstName", type: "string" },
      { internalType: "string", name: "_lastname", type: "string" },
      { internalType: "string", name: "_email", type: "string" },
    ],
    name: "receivePaymentBpF",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawBpF",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
