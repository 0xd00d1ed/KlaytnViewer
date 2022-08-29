const obj = {
  title: "PoolVoting",
  description: "풀투표 정보 컨트랙트",
  address: "0xa34f06315A3f86605eCbCC72Bc789ddc4A883251",
  abi: `[
    {
        "constant": true,
        "inputs": [
            {
                "name": "지갑주소",
                "type": "address"
            }
        ],
        "name": "getUserPoolVotingStat",
        "desc": "유저 풀투표 정보",
        "outputs": [
            {
                "name": "보유 vKSP",
                "type": "uint256"
            },
            {
                "name": "투표한 풀 갯수",
                "type": "uint256"
            },
            {
                "name": "총 투표 vKSP",
                "type": "uint256"
            },
            {
                "name": "풀 투표량",
                "type": "uint256[]"
            },
            {
                "name": "풀 주소",
                "type": "address[]"
            },
            {
                "name": "pendingRewards",
                "type": "uint256[]"
            },
            {
                "name": "totalRewards",
                "type": "uint256[]"
            },
            {
                "name": "tokens",
                "type": "address[]"
            },
            {
                "name": "symbols",
                "type": "string[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "vksp",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "dropBox",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDropCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "governance",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "si",
                "type": "uint256"
            },
            {
                "name": "ei",
                "type": "uint256"
            }
        ],
        "name": "getPoolVotingData",
        "outputs": [
            {
                "name": "pools",
                "type": "address[]"
            },
            {
                "name": "uints",
                "type": "uint256[]"
            },
            {
                "name": "prevAmounts",
                "type": "uint256[]"
            },
            {
                "name": "prevBoosting",
                "type": "uint256[]"
            },
            {
                "name": "curAmounts",
                "type": "uint256[]"
            },
            {
                "name": "curBoosting",
                "type": "uint256[]"
            },
            {
                "name": "curRates",
                "type": "uint256[]"
            },
            {
                "name": "buybackAmounts",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "user",
                "type": "address"
            },
            {
                "name": "si",
                "type": "uint256"
            },
            {
                "name": "ei",
                "type": "uint256"
            }
        ],
        "name": "getDropRewardByRange",
        "outputs": [
            {
                "name": "len",
                "type": "uint256"
            },
            {
                "name": "addrs",
                "type": "address[]"
            },
            {
                "name": "uints",
                "type": "uint256[]"
            },
            {
                "name": "info",
                "type": "string[]"
            },
            {
                "name": "flag",
                "type": "bool[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getGovernanceConfig",
        "outputs": [
            {
                "name": "feeShareRate",
                "type": "uint256"
            },
            {
                "name": "vkspCur",
                "type": "uint256"
            },
            {
                "name": "vkspNext",
                "type": "uint256"
            },
            {
                "name": "singleCur",
                "type": "uint256"
            },
            {
                "name": "singleNext",
                "type": "uint256"
            },
            {
                "name": "miningShareCur",
                "type": "uint256"
            },
            {
                "name": "miningShareNext",
                "type": "uint256"
            },
            {
                "name": "rateNumeratorCur",
                "type": "uint256"
            },
            {
                "name": "rateNumeratorNext",
                "type": "uint256"
            },
            {
                "name": "settingInterval",
                "type": "uint256"
            },
            {
                "name": "nextSettingTime",
                "type": "uint256"
            },
            {
                "name": "prevSettingTime",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getPoolCount",
        "outputs": [
            {
                "name": "poolCount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getVKSPStat",
        "outputs": [
            {
                "name": "totalSupply",
                "type": "uint256"
            },
            {
                "name": "totalLocked",
                "type": "uint256"
            },
            {
                "name": "lastMined",
                "type": "uint256"
            },
            {
                "name": "miningIndex",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "factory",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getDropReward",
        "outputs": [
            {
                "name": "dropCount",
                "type": "uint256"
            },
            {
                "name": "addrs",
                "type": "address[]"
            },
            {
                "name": "uints",
                "type": "uint256[]"
            },
            {
                "name": "info",
                "type": "string[]"
            },
            {
                "name": "flag",
                "type": "bool[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "poolVoting",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getUserVKSPStat",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            },
            {
                "name": "lockedKSP",
                "type": "uint256"
            },
            {
                "name": "unlockTime",
                "type": "uint256"
            },
            {
                "name": "pendingKSP",
                "type": "uint256"
            },
            {
                "name": "totalKSP",
                "type": "uint256"
            },
            {
                "name": "userLastIndex",
                "type": "uint256"
            },
            {
                "name": "maximumLockPeriod",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "pool",
                "type": "address"
            },
            {
                "name": "epoch",
                "type": "uint256"
            },
            {
                "name": "poolAmount",
                "type": "uint256"
            },
            {
                "name": "config",
                "type": "uint256[]"
            }
        ],
        "name": "getPoolMiningRate",
        "outputs": [
            {
                "name": "pvRate",
                "type": "uint256"
            },
            {
                "name": "bbRate",
                "type": "uint256"
            },
            {
                "name": "curRate",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "buyback",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_governance",
                "type": "address"
            },
            {
                "name": "_dropBox",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]`,
};
export default obj;
