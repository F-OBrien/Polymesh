export default {
  "types": {
    "Address": "MultiAddress",
    "LookupSource": "MultiAddress",
    "AccountInfo": "AccountInfoWithDualRefCount",
    "ValidatorPrefsWithBlocked": {
      "commission": "Compact<Perbill>"
    },
    "IdentityId": "[u8; 32]",
    "EventDid": "IdentityId",
    "EventCounts": "Vec<u32>",
    "ErrorAt": "(u32, DispatchError)",
    "InvestorUid": "[u8; 16]",
    "Ticker": "[u8; 12]",
    "CddId": "[u8; 32]",
    "ScopeId": "[u8; 32]",
    "PosRatio": "(u32, u32)",
    "DocumentId": "u32",
    "DocumentName": "Text",
    "DocumentUri": "Text",
    "DocumentHash": {
      "_enum": {
        "None": "",
        "H512": "[u8; 64]",
        "H384": "[u8; 48]",
        "H320": "[u8; 40]",
        "H256": "[u8; 32]",
        "H224": "[u8; 28]",
        "H192": "[u8; 24]",
        "H160": "[u8; 20]",
        "H128": "[u8; 16]"
      }
    },
    "DocumentType": "Text",
    "Document": {
      "uri": "DocumentUri",
      "content_hash": "DocumentHash",
      "name": "DocumentName",
      "doc_type": "Option<DocumentType>",
      "filing_date": "Option<Moment>"
    },
    "Version": "u8",
    "CustomAssetTypeId": "u32",
    "AssetType": {
      "_enum": {
        "EquityCommon": "",
        "EquityPreferred": "",
        "Commodity": "",
        "FixedIncome": "",
        "REIT": "",
        "Fund": "",
        "RevenueShareAgreement": "",
        "StructuredProduct": "",
        "Derivative": "",
        "Custom": "CustomAssetTypeId",
        "StableCoin": ""
      }
    },
    "AssetIdentifier": {
      "_enum": {
        "CUSIP": "[u8; 9]",
        "CINS": "[u8; 9]",
        "ISIN": "[u8; 12]",
        "LEI": "[u8; 20]"
      }
    },
    "AssetOwnershipRelation": {
      "_enum": {
        "NotOwned": "",
        "TickerOwned": "",
        "AssetOwned": ""
      }
    },
    "AssetName": "Text",
    "FundingRoundName": "Text",
    "VenueDetails": "Text",
    "SecurityToken": {
      "total_supply": "Balance",
      "owner_did": "IdentityId",
      "divisible": "bool",
      "asset_type": "AssetType"
    },
    "PalletName": "Text",
    "DispatchableName": "Text",
    "AssetPermissions": {
      "_enum": {
        "Whole": "",
        "These": "Vec<Ticker>",
        "Except": "Vec<Ticker>"
      }
    },
    "PortfolioPermissions": {
      "_enum": {
        "Whole": "",
        "These": "Vec<PortfolioId>",
        "Except": "Vec<PortfolioId>"
      }
    },
    "DispatchableNames": {
      "_enum": {
        "Whole": "",
        "These": "Vec<DispatchableName>",
        "Except": "Vec<DispatchableName>"
      }
    },
    "PalletPermissions": {
      "pallet_name": "PalletName",
      "dispatchable_names": "DispatchableNames"
    },
    "ExtrinsicPermissions": {
      "_enum": {
        "Whole": "",
        "These": "Vec<PalletPermissions>",
        "Except": "Vec<PalletPermissions>"
      }
    },
    "Permissions": {
      "asset": "AssetPermissions",
      "extrinsic": "ExtrinsicPermissions",
      "portfolio": "PortfolioPermissions"
    },
    "LegacyPalletPermissions": {
      "pallet_name": "PalletName",
      "total": "bool",
      "dispatchable_names": "Vec<DispatchableName>"
    },
    "LegacyPermissions": {
      "asset": "Option<Vec<Ticker>>",
      "extrinsic": "Option<Vec<LegacyPalletPermissions>>",
      "portfolio": "Option<Vec<PortfolioId>>"
    },
    "Signatory": {
      "_enum": {
        "Identity": "IdentityId",
        "Account": "AccountId"
      }
    },
    "SecondaryKey": {
      "signer": "Signatory",
      "permissions": "Permissions"
    },
    "SecondaryKeyWithAuth": {
      "secondary_key": "SecondaryKey",
      "auth_signature": "Signature"
    },
    "Subsidy": {
      "paying_key": "AccountId",
      "remaining": "Balance"
    },
    "IdentityRole": {
      "_enum": [
        "Issuer",
        "SimpleTokenIssuer",
        "Validator",
        "ClaimIssuer",
        "Investor",
        "NodeRunner",
        "PM",
        "CDDAMLClaimIssuer",
        "AccreditedInvestorClaimIssuer",
        "VerifiedIdentityClaimIssuer"
      ]
    },
    "PreAuthorizedKeyInfo": {
      "target_id": "IdentityId",
      "secondary_key": "SecondaryKey"
    },
    "DidRecord": {
      "primary_key": "AccountId",
      "secondary_keys": "Vec<SecondaryKey>"
    },
    "KeyIdentityData": {
      "identity": "IdentityId",
      "permissions": "Option<Permissions>"
    },
    "CountryCode": {
      "_enum": [
        "AF",
        "AX",
        "AL",
        "DZ",
        "AS",
        "AD",
        "AO",
        "AI",
        "AQ",
        "AG",
        "AR",
        "AM",
        "AW",
        "AU",
        "AT",
        "AZ",
        "BS",
        "BH",
        "BD",
        "BB",
        "BY",
        "BE",
        "BZ",
        "BJ",
        "BM",
        "BT",
        "BO",
        "BA",
        "BW",
        "BV",
        "BR",
        "VG",
        "IO",
        "BN",
        "BG",
        "BF",
        "BI",
        "KH",
        "CM",
        "CA",
        "CV",
        "KY",
        "CF",
        "TD",
        "CL",
        "CN",
        "HK",
        "MO",
        "CX",
        "CC",
        "CO",
        "KM",
        "CG",
        "CD",
        "CK",
        "CR",
        "CI",
        "HR",
        "CU",
        "CY",
        "CZ",
        "DK",
        "DJ",
        "DM",
        "DO",
        "EC",
        "EG",
        "SV",
        "GQ",
        "ER",
        "EE",
        "ET",
        "FK",
        "FO",
        "FJ",
        "FI",
        "FR",
        "GF",
        "PF",
        "TF",
        "GA",
        "GM",
        "GE",
        "DE",
        "GH",
        "GI",
        "GR",
        "GL",
        "GD",
        "GP",
        "GU",
        "GT",
        "GG",
        "GN",
        "GW",
        "GY",
        "HT",
        "HM",
        "VA",
        "HN",
        "HU",
        "IS",
        "IN",
        "ID",
        "IR",
        "IQ",
        "IE",
        "IM",
        "IL",
        "IT",
        "JM",
        "JP",
        "JE",
        "JO",
        "KZ",
        "KE",
        "KI",
        "KP",
        "KR",
        "KW",
        "KG",
        "LA",
        "LV",
        "LB",
        "LS",
        "LR",
        "LY",
        "LI",
        "LT",
        "LU",
        "MK",
        "MG",
        "MW",
        "MY",
        "MV",
        "ML",
        "MT",
        "MH",
        "MQ",
        "MR",
        "MU",
        "YT",
        "MX",
        "FM",
        "MD",
        "MC",
        "MN",
        "ME",
        "MS",
        "MA",
        "MZ",
        "MM",
        "NA",
        "NR",
        "NP",
        "NL",
        "AN",
        "NC",
        "NZ",
        "NI",
        "NE",
        "NG",
        "NU",
        "NF",
        "MP",
        "NO",
        "OM",
        "PK",
        "PW",
        "PS",
        "PA",
        "PG",
        "PY",
        "PE",
        "PH",
        "PN",
        "PL",
        "PT",
        "PR",
        "QA",
        "RE",
        "RO",
        "RU",
        "RW",
        "BL",
        "SH",
        "KN",
        "LC",
        "MF",
        "PM",
        "VC",
        "WS",
        "SM",
        "ST",
        "SA",
        "SN",
        "RS",
        "SC",
        "SL",
        "SG",
        "SK",
        "SI",
        "SB",
        "SO",
        "ZA",
        "GS",
        "SS",
        "ES",
        "LK",
        "SD",
        "SR",
        "SJ",
        "SZ",
        "SE",
        "CH",
        "SY",
        "TW",
        "TJ",
        "TZ",
        "TH",
        "TL",
        "TG",
        "TK",
        "TO",
        "TT",
        "TN",
        "TR",
        "TM",
        "TC",
        "TV",
        "UG",
        "UA",
        "AE",
        "GB",
        "US",
        "UM",
        "UY",
        "UZ",
        "VU",
        "VE",
        "VN",
        "VI",
        "WF",
        "EH",
        "YE",
        "ZM",
        "ZW",
        "BQ",
        "CW",
        "SX"
      ]
    },
    "Scope": {
      "_enum": {
        "Identity": "IdentityId",
        "Ticker": "Ticker",
        "Custom": "Vec<u8>"
      }
    },
    "InvestorZKProofData": "Signature",
    "Scalar": "[u8; 32]",
    "RistrettoPoint": "[u8; 32]",
    "ZkProofData": {
      "challenge_responses": "[Scalar; 2]",
      "subtract_expressions_res": "RistrettoPoint",
      "blinded_scope_did_hash": "RistrettoPoint"
    },
    "ScopeClaimProof": {
      "proof_scope_id_wellformed": "Signature",
      "proof_scope_id_cdd_id_match": "ZkProofData",
      "scope_id": "RistrettoPoint"
    },
    "Claim": {
      "_enum": {
        "Accredited": "Scope",
        "Affiliate": "Scope",
        "BuyLockup": "Scope",
        "SellLockup": "Scope",
        "CustomerDueDiligence": "CddId",
        "KnowYourCustomer": "Scope",
        "Jurisdiction": "(CountryCode, Scope)",
        "Exempted": "Scope",
        "Blocked": "Scope",
        "InvestorUniqueness": "(Scope, ScopeId, CddId)",
        "NoData": "",
        "InvestorUniquenessV2": "(CddId)"
      }
    },
    "ClaimType": {
      "_enum": {
        "Accredited": "",
        "Affiliate": "",
        "BuyLockup": "",
        "SellLockup": "",
        "CustomerDueDiligence": "",
        "KnowYourCustomer": "",
        "Jurisdiction": "",
        "Exempted": "",
        "Blocked": "",
        "InvestorUniqueness": "",
        "NoData": "",
        "InvestorUniquenessV2": ""
      }
    },
    "IdentityClaim": {
      "claim_issuer": "IdentityId",
      "issuance_date": "Moment",
      "last_update_date": "Moment",
      "expiry": "Option<Moment>",
      "claim": "Claim"
    },
    "IdentityClaimKey": {
      "id": "IdentityId",
      "claim_type": "ClaimType"
    },
    "ComplianceRequirement": {
      "sender_conditions": "Vec<Condition>",
      "receiver_conditions": "Vec<Condition>",
      "id": "u32"
    },
    "ComplianceRequirementResult": {
      "sender_conditions": "Vec<ConditionResult>",
      "receiver_conditions": "Vec<ConditionResult>",
      "id": "u32",
      "result": "bool"
    },
    "ConditionType": {
      "_enum": {
        "IsPresent": "Claim",
        "IsAbsent": "Claim",
        "IsAnyOf": "Vec<Claim>",
        "IsNoneOf": "Vec<Claim>",
        "IsIdentity": "TargetIdentity"
      }
    },
    "TrustedFor": {
      "_enum": {
        "Any": "",
        "Specific": "Vec<ClaimType>"
      }
    },
    "TrustedIssuer": {
      "issuer": "IdentityId",
      "trusted_for": "TrustedFor"
    },
    "Condition": {
      "condition_type": "ConditionType",
      "issuers": "Vec<TrustedIssuer>"
    },
    "ConditionResult": {
      "condition": "Condition",
      "result": "bool"
    },
    "SimpleTokenRecord": {
      "ticker": "Ticker",
      "total_supply": "Balance",
      "owner_did": "IdentityId"
    },
    "FeeOf": "Balance",
    "TargetIdAuthorization": {
      "target_id": "IdentityId",
      "nonce": "u64",
      "expires_at": "Moment"
    },
    "TickerRegistration": {
      "owner": "IdentityId",
      "expiry": "Option<Moment>"
    },
    "TickerRegistrationConfig": {
      "max_ticker_length": "u8",
      "registration_length": "Option<Moment>"
    },
    "ClassicTickerRegistration": {
      "eth_owner": "EthereumAddress",
      "is_created": "bool"
    },
    "ClassicTickerImport": {
      "eth_owner": "EthereumAddress",
      "ticker": "Ticker",
      "is_contract": "bool",
      "is_created": "bool"
    },
    "EthereumAddress": "[u8; 20]",
    "EcdsaSignature": "[u8; 65]",
    "MotionTitle": "Text",
    "MotionInfoLink": "Text",
    "ChoiceTitle": "Text",
    "Motion": {
      "title": "MotionTitle",
      "info_link": "MotionInfoLink",
      "choices": "Vec<ChoiceTitle>"
    },
    "BallotTitle": "Text",
    "BallotMeta": {
      "title": "BallotTitle",
      "motions": "Vec<Motion>"
    },
    "BallotTimeRange": {
      "start": "Moment",
      "end": "Moment"
    },
    "BallotVote": {
      "power": "Balance",
      "fallback": "Option<u16>"
    },
    "MaybeBlock": {
      "_enum": {
        "Some": "BlockNumber",
        "None": ""
      }
    },
    "Url": "Text",
    "PipDescription": "Text",
    "PipsMetadata": {
      "id": "PipId",
      "url": "Option<Url>",
      "description": "Option<PipDescription>",
      "created_at": "BlockNumber",
      "transaction_version": "u32",
      "expiry": "MaybeBlock"
    },
    "Proposer": {
      "_enum": {
        "Community": "AccountId",
        "Committee": "Committee"
      }
    },
    "Committee": {
      "_enum": {
        "Technical": "",
        "Upgrade": ""
      }
    },
    "SkippedCount": "u8",
    "SnapshottedPip": {
      "id": "PipId",
      "weight": "(bool, Balance)"
    },
    "SnapshotId": "u32",
    "SnapshotMetadata": {
      "created_at": "BlockNumber",
      "made_by": "AccountId",
      "id": "SnapshotId"
    },
    "SnapshotResult": {
      "_enum": {
        "Approve": "",
        "Reject": "",
        "Skip": ""
      }
    },
    "Beneficiary": {
      "id": "IdentityId",
      "amount": "Balance"
    },
    "DepositInfo": {
      "owner": "AccountId",
      "amount": "Balance"
    },
    "PolymeshVotes": {
      "index": "u32",
      "ayes": "Vec<(IdentityId, Balance)>",
      "nays": "Vec<(IdentityId, Balance)>",
      "end": "BlockNumber",
      "expiry": "MaybeBlock"
    },
    "PipId": "u32",
    "ProposalState": {
      "_enum": [
        "Pending",
        "Rejected",
        "Scheduled",
        "Failed",
        "Executed",
        "Expired"
      ]
    },
    "Pip": {
      "id": "PipId",
      "proposal": "Call",
      "state": "ProposalState",
      "proposer": "Proposer"
    },
    "ProposalData": {
      "_enum": {
        "Hash": "Hash",
        "Proposal": "Vec<u8>"
      }
    },
    "TickerTransferApproval": {
      "authorized_by": "IdentityId",
      "next_ticker": "Option<Ticker>",
      "previous_ticker": "Option<Ticker>"
    },
    "OffChainSignature": {
      "_enum": {
        "Ed25519": "H512",
        "Sr25519": "H512",
        "Ecdsa": "H512"
      }
    },
    "Authorization": {
      "authorization_data": "AuthorizationData",
      "authorized_by": "IdentityId",
      "expiry": "Option<Moment>",
      "auth_id": "u64"
    },
    "AuthorizationData": {
      "_enum": {
        "AttestPrimaryKeyRotation": "IdentityId",
        "RotatePrimaryKey": "IdentityId",
        "TransferTicker": "Ticker",
        "TransferPrimaryIssuanceAgent": "Ticker",
        "AddMultiSigSigner": "AccountId",
        "TransferAssetOwnership": "Ticker",
        "JoinIdentity": "Permissions",
        "PortfolioCustody": "PortfolioId",
        "Custom": "Ticker",
        "NoData": "",
        "TransferCorporateActionAgent": "Ticker",
        "BecomeAgent": "(Ticker, AgentGroup)",
        "AddRelayerPayingKey": "(AccountId, AccountId, Balance)"
      }
    },
    "SmartExtensionType": {
      "_enum": {
        "TransferManager": "",
        "Offerings": "",
        "SmartWallet": "",
        "Custom": "Vec<u8>"
      }
    },
    "SmartExtensionName": "Text",
    "SmartExtension": {
      "extension_type": "SmartExtensionType",
      "extension_name": "SmartExtensionName",
      "extension_id": "AccountId",
      "is_archive": "bool"
    },
    "MetaUrl": "Text",
    "MetaDescription": "Text",
    "MetaVersion": "u32",
    "ExtVersion": "u32",
    "TemplateMetadata": {
      "url": "Option<MetaUrl>",
      "se_type": "SmartExtensionType",
      "usage_fee": "Balance",
      "description": "MetaDescription",
      "version": "MetaVersion"
    },
    "TemplateDetails": {
      "instantiation_fee": "Balance",
      "owner": "IdentityId",
      "frozen": "bool"
    },
    "ProportionMatch": {
      "_enum": ["AtLeast", "MoreThan"]
    },
    "AuthorizationNonce": "u64",
    "Counter": "u64",
    "Percentage": "Permill",
    "TransferManager": {
      "_enum": {
        "CountTransferManager": "Counter",
        "PercentageTransferManager": "Percentage"
      }
    },
    "RestrictionResult": {
      "_enum": ["Valid", "Invalid", "ForceValid"]
    },
    "Memo": "[u8;32]",
    "IssueRecipient": {
      "_enum": {
        "Account": "AccountId",
        "Identity": "IdentityId"
      }
    },
    "BridgeTx": {
      "nonce": "u32",
      "recipient": "AccountId",
      "value": "Balance",
      "tx_hash": "H256"
    },
    "PendingTx": {
      "did": "IdentityId",
      "bridge_tx": "BridgeTx"
    },
    "AssetCompliance": {
      "is_paused": "bool",
      "requirements": "Vec<ComplianceRequirement>"
    },
    "AssetComplianceResult": {
      "paused": "bool",
      "requirements": "Vec<ComplianceRequirementResult>",
      "result": "bool"
    },
    "Claim1stKey": {
      "target": "IdentityId",
      "claim_type": "ClaimType"
    },
    "Claim2ndKey": {
      "issuer": "IdentityId",
      "scope": "Option<Scope>"
    },
    "BatchAddClaimItem": {
      "target": "IdentityId",
      "claim": "Claim",
      "expiry": "Option<Moment>"
    },
    "BatchRevokeClaimItem": {
      "target": "IdentityId",
      "claim": "Claim"
    },
    "InactiveMember": {
      "id": "IdentityId",
      "deactivated_at": "Moment",
      "expiry": "Option<Moment>"
    },
    "VotingResult": {
      "ayes_count": "u32",
      "ayes_stake": "Balance",
      "nays_count": "u32",
      "nays_stake": "Balance"
    },
    "ProtocolOp": {
      "_enum": [
        "AssetRegisterTicker",
        "AssetIssue",
        "AssetAddDocument",
        "AssetCreateAsset",
        "AssetCreateCheckpointSchedule",
        "DividendNew",
        "ComplianceManagerAddComplianceRequirement",
        "IdentityRegisterDid",
        "IdentityCddRegisterDid",
        "IdentityAddClaim",
        "IdentitySetPrimaryKey",
        "IdentityAddSecondaryKeysWithAuthorization",
        "PipsPropose",
        "VotingAddBallot",
        "ContractsPutCode",
        "BallotAttachBallot",
        "DistributionDistribute"
      ]
    },
    "CddStatus": {
      "_enum": {
        "Ok": "IdentityId",
        "Err": "Vec<u8>"
      }
    },
    "AssetDidResult": {
      "_enum": {
        "Ok": "IdentityId",
        "Err": "Vec<u8>"
      }
    },
    "DidRecordsSuccess": {
      "primary_key": "AccountId",
      "secondary_key": "Vec<SecondaryKey>"
    },
    "DidRecords": {
      "_enum": {
        "Success": "DidRecordsSuccess",
        "IdNotFound": "Vec<u8>"
      }
    },
    "VoteCountProposalFound": {
      "ayes": "u64",
      "nays": "u64"
    },
    "VoteCount": {
      "_enum": {
        "ProposalFound": "VoteCountProposalFound",
        "ProposalNotFound": "Vec<u8>"
      }
    },
    "Vote": "(bool, Balance)",
    "VoteByPip": {
      "pip": "PipId",
      "vote": "Vote"
    },
    "BridgeTxDetail": {
      "amount": "Balance",
      "status": "BridgeTxStatus",
      "execution_block": "BlockNumber",
      "tx_hash": "H256"
    },
    "BridgeTxStatus": {
      "_enum": {
        "Absent": "",
        "Pending": "u8",
        "Frozen": "",
        "Timelocked": "",
        "Handled": ""
      }
    },
    "HandledTxStatus": {
      "_enum": {
        "Success": "",
        "Error": "Text"
      }
    },
    "CappedFee": "u64",
    "CanTransferResult": {
      "_enum": {
        "Ok": "u8",
        "Err": "Vec<u8>"
      }
    },
    "AuthorizationType": {
      "_enum": {
        "AttestPrimaryKeyRotation": "",
        "RotatePrimaryKey": "",
        "TransferTicker": "",
        "AddMultiSigSigner": "",
        "TransferAssetOwnership": "",
        "JoinIdentity": "",
        "PortfolioCustody": "",
        "Custom": "",
        "NoData": ""
      }
    },
    "ProposalDetails": {
      "approvals": "u64",
      "rejections": "u64",
      "status": "ProposalStatus",
      "expiry": "Option<Moment>",
      "auto_close": "bool"
    },
    "ProposalStatus": {
      "_enum": {
        "Invalid": "",
        "ActiveOrExpired": "",
        "ExecutionSuccessful": "",
        "ExecutionFailed": "",
        "Rejected": ""
      }
    },
    "DidStatus": {
      "_enum": {
        "Unknown": "",
        "Exists": "",
        "CddVerified": ""
      }
    },
    "PortfolioName": "Text",
    "PortfolioNumber": "u64",
    "PortfolioKind": {
      "_enum": {
        "Default": "",
        "User": "PortfolioNumber"
      }
    },
    "PortfolioId": {
      "did": "IdentityId",
      "kind": "PortfolioKind"
    },
    "ProverTickerKey": {
      "prover": "IdentityId",
      "ticker": "Ticker"
    },
    "TickerRangeProof": {
      "initial_message": "[u8; 32]",
      "final_response": "Vec<u8>",
      "max_two_exp": "u32"
    },
    "Moment": "u64",
    "CalendarUnit": {
      "_enum": ["Second", "Minute", "Hour", "Day", "Week", "Month", "Year"]
    },
    "CalendarPeriod": {
      "unit": "CalendarUnit",
      "amount": "u64"
    },
    "CheckpointSchedule": {
      "start": "Moment",
      "period": "CalendarPeriod"
    },
    "CheckpointId": "u64",
    "ScheduleId": "u64",
    "StoredSchedule": {
      "schedule": "CheckpointSchedule",
      "id": "ScheduleId",
      "at": "Moment",
      "remaining": "u32"
    },
    "ScheduleSpec": {
      "start": "Option<Moment>",
      "period": "CalendarPeriod",
      "remaining": "u32"
    },
    "InstructionStatus": {
      "_enum": {
        "Unknown": "",
        "Pending": "",
        "Failed": ""
      }
    },
    "LegStatus": {
      "_enum": {
        "PendingTokenLock": "",
        "ExecutionPending": "",
        "ExecutionToBeSkipped": "(AccountId, u64)"
      }
    },
    "AffirmationStatus": {
      "_enum": {
        "Unknown": "",
        "Pending": "",
        "Affirmed": "",
        "Rejected": ""
      }
    },
    "SettlementType": {
      "_enum": {
        "SettleOnAffirmation": "",
        "SettleOnBlock": "BlockNumber"
      }
    },
    "Instruction": {
      "instruction_id": "u64",
      "venue_id": "u64",
      "status": "InstructionStatus",
      "settlement_type": "SettlementType",
      "created_at": "Option<Moment>",
      "trade_date": "Option<Moment>",
      "value_date": "Option<Moment>"
    },
    "Leg": {
      "from": "PortfolioId",
      "to": "PortfolioId",
      "asset": "Ticker",
      "amount": "Balance"
    },
    "Venue": {
      "creator": "IdentityId",
      "venue_type": "VenueType"
    },
    "Receipt": {
      "receipt_uid": "u64",
      "from": "PortfolioId",
      "to": "PortfolioId",
      "asset": "Ticker",
      "amount": "Balance"
    },
    "ReceiptMetadata": "Text",
    "ReceiptDetails": {
      "receipt_uid": "u64",
      "leg_id": "u64",
      "signer": "AccountId",
      "signature": "OffChainSignature",
      "metadata": "ReceiptMetadata"
    },
    "UniqueCall": {
      "nonce": "u64",
      "call": "Call"
    },
    "MovePortfolioItem": {
      "ticker": "Ticker",
      "amount": "Balance",
      "memo": "Option<Memo>"
    },
    "WeightToFeeCoefficient": {
      "coeffInteger": "Balance",
      "coeffFrac": "Perbill",
      "negative": "bool",
      "degree": "u8"
    },
    "TargetIdentity": {
      "_enum": {
        "ExternalAgent": "",
        "Specific": "IdentityId"
      }
    },
    "FundraiserName": "Text",
    "FundraiserStatus": {
      "_enum": ["Live", "Frozen", "Closed", "ClosedEarly"]
    },
    "FundraiserTier": {
      "total": "Balance",
      "price": "Balance",
      "remaining": "Balance"
    },
    "Fundraiser": {
      "creator": "IdentityId",
      "offering_portfolio": "PortfolioId",
      "offering_asset": "Ticker",
      "raising_portfolio": "PortfolioId",
      "raising_asset": "Ticker",
      "tiers": "Vec<FundraiserTier>",
      "venue_id": "u64",
      "start": "Moment",
      "end": "Option<Moment>",
      "status": "FundraiserStatus",
      "minimum_investment": "Balance"
    },
    "VenueType": {
      "_enum": ["Other", "Distribution", "Sto", "Exchange"]
    },
    "Payload": {
      "block_number": "BlockNumber",
      "nominators": "Vec<AccountId>",
      "public": "H256"
    },
    "ExtensionAttributes": {
      "usage_fee": "Balance",
      "version": "MetaVersion"
    },
    "Tax": "Permill",
    "TargetIdentities": {
      "identities": "Vec<IdentityId>",
      "treatment": "TargetTreatment"
    },
    "TargetTreatment": {
      "_enum": ["Include", "Exclude"]
    },
    "CAKind": {
      "_enum": [
        "PredictableBenefit",
        "UnpredictableBenefit",
        "IssuerNotice",
        "Reorganization",
        "Other"
      ]
    },
    "CADetails": "Text",
    "CACheckpoint": {
      "_enum": {
        "Scheduled": "(ScheduleId, u64)",
        "Existing": "CheckpointId"
      }
    },
    "RecordDate": {
      "date": "Moment",
      "checkpoint": "CACheckpoint"
    },
    "RecordDateSpec": {
      "_enum": {
        "Scheduled": "Moment",
        "ExistingSchedule": "ScheduleId",
        "Existing": "CheckpointId"
      }
    },
    "CorporateAction": {
      "kind": "CAKind",
      "decl_date": "Moment",
      "record_date": "Option<RecordDate>",
      "targets": "TargetIdentities",
      "default_withholding_tax": "Tax",
      "withholding_tax": "Vec<(IdentityId, Tax)>"
    },
    "LocalCAId": "u32",
    "CAId": {
      "ticker": "Ticker",
      "local_id": "LocalCAId"
    },
    "Distribution": {
      "from": "PortfolioId",
      "currency": "Ticker",
      "per_share": "Balance",
      "amount": "Balance",
      "remaining": "Balance",
      "reclaimed": "bool",
      "payment_at": "Moment",
      "expires_at": "Option<Moment>"
    },
    "SlashingSwitch": {
      "_enum": ["Validator", "ValidatorAndNominator", "None"]
    },
    "PriceTier": {
      "total": "Balance",
      "price": "Balance"
    },
    "AssetMigrationError": {
      "_enum": {
        "AssetDocumentFail": "(Ticker, DocumentId)"
      }
    },
    "MigrationError": {
      "_enum": {
        "DecodeKey": "Vec<u8>",
        "Map": "AssetMigrationError"
      }
    },
    "PermissionedIdentityPrefs": {
      "intended_count": "u32",
      "running_count": "u32"
    },
    "GranularCanTransferResult": {
      "invalid_granularity": "bool",
      "self_transfer": "bool",
      "invalid_receiver_cdd": "bool",
      "invalid_sender_cdd": "bool",
      "missing_scope_claim": "bool",
      "receiver_custodian_error": "bool",
      "sender_custodian_error": "bool",
      "sender_insufficient_balance": "bool",
      "portfolio_validity_result": "PortfolioValidityResult",
      "asset_frozen": "bool",
      "statistics_result": "Vec<TransferManagerResult>",
      "compliance_result": "AssetComplianceResult",
      "result": "bool"
    },
    "PortfolioValidityResult": {
      "receiver_is_same_portfolio": "bool",
      "sender_portfolio_does_not_exist": "bool",
      "receiver_portfolio_does_not_exist": "bool",
      "sender_insufficient_balance": "bool",
      "result": "bool"
    },
    "TransferManagerResult": {
      "tm": "TransferManager",
      "result": "bool"
    },
    "AGId": "u32",
    "AgentGroup": {
      "_enum": {
        "Full": "",
        "Custom": "AGId",
        "ExceptMeta": "",
        "PolymeshV1CAA": "",
        "PolymeshV1PIA": ""
      }
    }
  },
};
