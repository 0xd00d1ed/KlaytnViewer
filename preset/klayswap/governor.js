const obj = {
    title: 'Gonvernor',
    description: '의제 관련 컨트랙트',
    address: '0x05343B228d61402E84d973ce114f34bC3F9e5987',
    abi: `[
{
    "constant": true,
    "inputs": [
        {
            "name": "의제번호",
            "type": "uint256"
        },
        {
            "name": "유저주소",
            "type": "address"
        }
    ],
    "name": "getReceipt",
    "desc": "유저 투표 정보",
    "outputs": [
        {
            "name": "투표여부",
            "type": "bool"
        },
        {
            "name": "찬반",
            "type": "bool"
        },
        {
            "name": "투표량",
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
            "name": "의제번호",
            "type": "uint256"
        }
    ],
    "name": "proposals",
    "outputs": [
        {
            "name": "id",
            "type": "uint256"
        },
        {
            "name": "proposer",
            "type": "address"
        },
        {
            "name": "eta",
            "type": "uint256"
        },
        {
            "name": "target",
            "type": "address"
        },
        {
            "name": "signature",
            "type": "string"
        },
        {
            "name": "callData",
            "type": "bytes"
        },
        {
            "name": "startBlock",
            "type": "uint256"
        },
        {
            "name": "endBlock",
            "type": "uint256"
        },
        {
            "name": "forVotes",
            "type": "uint256"
        },
        {
            "name": "againstVotes",
            "type": "uint256"
        },
        {
            "name": "canceled",
            "type": "bool"
        },
        {
            "name": "executed",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "votingPeriod",
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
    "name": "delistingPeriod",
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
    "constant": false,
    "inputs": [
        {
            "name": "newVotingPeriod",
            "type": "uint256"
        }
    ],
    "name": "_setVotingPeriod",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        },
        {
            "name": "support",
            "type": "bool"
        }
    ],
    "name": "castVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [
        {
            "name": "",
            "type": "bytes32"
        }
    ],
    "name": "queuedPids",
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
    "inputs": [
        {
            "name": "",
            "type": "address"
        }
    ],
    "name": "latestProposalIds",
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
    "inputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "results",
    "outputs": [
        {
            "name": "executedBlock",
            "type": "uint256"
        },
        {
            "name": "succeeded",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "newVotingDelay",
            "type": "uint256"
        }
    ],
    "name": "_setVotingDelay",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "MIN_VOTING_PERIOD",
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
    "constant": false,
    "inputs": [
        {
            "name": "newProposalThresholdRate",
            "type": "uint256"
        }
    ],
    "name": "_setProposalThresholdRate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "token",
            "type": "address"
        },
        {
            "name": "force",
            "type": "bool"
        }
    ],
    "name": "forceQueueDelisting",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "transactionId",
            "type": "uint256"
        },
        {
            "name": "executionResult",
            "type": "bool"
        }
    ],
    "name": "executed",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "MIN_QUORUM_VOTES_RATE",
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
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        }
    ],
    "name": "getActions",
    "outputs": [
        {
            "name": "target",
            "type": "address"
        },
        {
            "name": "signature",
            "type": "string"
        },
        {
            "name": "callData",
            "type": "bytes"
        },
        {
            "name": "eta",
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
    "name": "votingDelay",
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
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        }
    ],
    "name": "state",
    "outputs": [
        {
            "name": "",
            "type": "uint8"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        }
    ],
    "name": "cancel",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "newProposalFee",
            "type": "uint256"
        }
    ],
    "name": "_setProposalFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "MAX_GRACE_PERIOD",
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
    "name": "MIN_PROPOSAL_THRESHOLD_RATE",
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
    "inputs": [
        {
            "name": "",
            "type": "address"
        }
    ],
    "name": "delistingBlock",
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
    "name": "version",
    "outputs": [
        {
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "policyAdmin",
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
    "inputs": [],
    "name": "implementation",
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
    "constant": false,
    "inputs": [
        {
            "name": "target",
            "type": "address"
        },
        {
            "name": "signature",
            "type": "string"
        },
        {
            "name": "callData",
            "type": "bytes"
        },
        {
            "name": "description",
            "type": "string"
        }
    ],
    "name": "propose",
    "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        },
        {
            "name": "support",
            "type": "bool"
        },
        {
            "name": "reason",
            "type": "string"
        }
    ],
    "name": "castVoteWithReason",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "MAX_PROPOSAL_THRESHOLD_RATE",
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
    "inputs": [
        {
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "pids",
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
    "name": "nextOwner",
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
    "constant": false,
    "inputs": [
        {
            "name": "_newImp",
            "type": "address"
        },
        {
            "name": "version",
            "type": "string"
        }
    ],
    "name": "_setImplementation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "target",
            "type": "address"
        },
        {
            "name": "sig",
            "type": "string"
        },
        {
            "name": "verifier",
            "type": "address"
        }
    ],
    "name": "_setVerifier",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "quorumVotesRate",
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
    "constant": false,
    "inputs": [
        {
            "name": "token",
            "type": "address"
        }
    ],
    "name": "delisting",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "MIN_GRACE_PERIOD",
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
    "name": "owner",
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
    "name": "MIN_DELISTING_PERIOD",
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
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        }
    ],
    "name": "getResult",
    "outputs": [
        {
            "name": "succeeded",
            "type": "bool"
        },
        {
            "name": "executedBlock",
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
    "name": "proposalThresholdRate",
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
    "name": "gracePeriod",
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
    "constant": false,
    "inputs": [
        {
            "name": "newDelistingPeriod",
            "type": "uint256"
        }
    ],
    "name": "_setDelistingPeriod",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "MAX_VOTING_PERIOD",
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
    "name": "MAX_VOTING_DELAY",
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
    "constant": false,
    "inputs": [
        {
            "name": "_policyAdmin",
            "type": "address"
        }
    ],
    "name": "_setPolicyAmdin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "newQuorumVotesRate",
            "type": "uint256"
        }
    ],
    "name": "_setQuorumVotesRate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "proposalFee",
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
    "inputs": [
        {
            "name": "token",
            "type": "address"
        }
    ],
    "name": "needDelisting",
    "outputs": [
        {
            "name": "",
            "type": "bool"
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
    "inputs": [],
    "name": "votingKSP",
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
    "name": "SET_VALID_TOKEN",
    "outputs": [
        {
            "name": "",
            "type": "bytes32"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "proposalCount",
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
    "name": "MAX_QUORUM_VOTES_RATE",
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
    "constant": false,
    "inputs": [
        {
            "name": "proposalId",
            "type": "uint256"
        }
    ],
    "name": "queue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
            "name": "",
            "type": "address"
        },
        {
            "name": "",
            "type": "bytes32"
        }
    ],
    "name": "verifiers",
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
    "name": "MIN_VOTING_DELAY",
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
    "name": "RATE_DENOM",
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
    "inputs": [
        {
            "name": "",
            "type": "bytes32"
        }
    ],
    "name": "queuedTransactions",
    "outputs": [
        {
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "newGracePeriod",
            "type": "uint256"
        }
    ],
    "name": "_setGracePeriod",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "id",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "proposer",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "target",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "signature",
            "type": "string"
        },
        {
            "indexed": false,
            "name": "callData",
            "type": "bytes"
        },
        {
            "indexed": false,
            "name": "startBlock",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "endBlock",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "description",
            "type": "string"
        }
    ],
    "name": "ProposalCreated",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "name": "voter",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "proposalId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "support",
            "type": "bool"
        },
        {
            "indexed": false,
            "name": "votes",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "reason",
            "type": "string"
        }
    ],
    "name": "VoteCast",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "id",
            "type": "uint256"
        }
    ],
    "name": "ProposalCanceled",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "id",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "eta",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "tid",
            "type": "uint256"
        }
    ],
    "name": "ProposalQueued",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "id",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "succeeded",
            "type": "bool"
        }
    ],
    "name": "ProposalExecuted",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "target",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "sig",
            "type": "string"
        },
        {
            "indexed": false,
            "name": "valid",
            "type": "address"
        }
    ],
    "name": "VerifierSet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "proposer",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "proposalFee",
            "type": "uint256"
        }
    ],
    "name": "ProposalFeeBurnt",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldProposalFee",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "proposalFee",
            "type": "uint256"
        }
    ],
    "name": "ProposalFeeSet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldProposalThresholdRate",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "proposalThresholdRate",
            "type": "uint256"
        }
    ],
    "name": "ProposalThresholdRateSet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldQuorumVotesRate",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "quorumVotesRate",
            "type": "uint256"
        }
    ],
    "name": "QuorumVotesRateSet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldVotingPeriod",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "newVotingPeriod",
            "type": "uint256"
        }
    ],
    "name": "VotingPeriodSet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldVotingDelay",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "newVotingDelay",
            "type": "uint256"
        }
    ],
    "name": "VotingDelaySet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldGracePeriod",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "gracePeriod",
            "type": "uint256"
        }
    ],
    "name": "GracePeriodSet",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "name": "oldDelistingPeriod",
            "type": "uint256"
        },
        {
            "indexed": false,
            "name": "delistingPeriod",
            "type": "uint256"
        }
    ],
    "name": "DelistingPeriodSet",
    "type": "event"
}
]`
}
export default obj;