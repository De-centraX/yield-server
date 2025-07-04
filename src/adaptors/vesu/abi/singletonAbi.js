module.exports = [
  {
    "name": "SingletonV2Impl",
    "type": "impl",
    "interface_name": "vesu::v2::singleton_v2::ISingletonV2"
  },
  {
    "name": "core::integer::u256",
    "type": "struct",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "name": "core::bool",
    "type": "enum",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "name": "vesu::data_model::AssetConfig",
    "type": "struct",
    "members": [
      {
        "name": "total_collateral_shares",
        "type": "core::integer::u256"
      },
      {
        "name": "total_nominal_debt",
        "type": "core::integer::u256"
      },
      {
        "name": "reserve",
        "type": "core::integer::u256"
      },
      {
        "name": "max_utilization",
        "type": "core::integer::u256"
      },
      {
        "name": "floor",
        "type": "core::integer::u256"
      },
      {
        "name": "scale",
        "type": "core::integer::u256"
      },
      {
        "name": "is_legacy",
        "type": "core::bool"
      },
      {
        "name": "last_updated",
        "type": "core::integer::u64"
      },
      {
        "name": "last_rate_accumulator",
        "type": "core::integer::u256"
      },
      {
        "name": "last_full_utilization_rate",
        "type": "core::integer::u256"
      },
      {
        "name": "fee_rate",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "name": "vesu::data_model::LTVConfig",
    "type": "struct",
    "members": [
      {
        "name": "max_ltv",
        "type": "core::integer::u64"
      }
    ]
  },
  {
    "name": "vesu::data_model::Position",
    "type": "struct",
    "members": [
      {
        "name": "collateral_shares",
        "type": "core::integer::u256"
      },
      {
        "name": "nominal_debt",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "name": "alexandria_math::i257::i257",
    "type": "struct",
    "members": [
      {
        "name": "abs",
        "type": "core::integer::u256"
      },
      {
        "name": "is_negative",
        "type": "core::bool"
      }
    ]
  },
  {
    "name": "vesu::data_model::AmountType",
    "type": "enum",
    "variants": [
      {
        "name": "Delta",
        "type": "()"
      },
      {
        "name": "Target",
        "type": "()"
      }
    ]
  },
  {
    "name": "vesu::data_model::AmountDenomination",
    "type": "enum",
    "variants": [
      {
        "name": "Native",
        "type": "()"
      },
      {
        "name": "Assets",
        "type": "()"
      }
    ]
  },
  {
    "name": "vesu::data_model::Amount",
    "type": "struct",
    "members": [
      {
        "name": "amount_type",
        "type": "vesu::data_model::AmountType"
      },
      {
        "name": "denomination",
        "type": "vesu::data_model::AmountDenomination"
      },
      {
        "name": "value",
        "type": "alexandria_math::i257::i257"
      }
    ]
  },
  {
    "name": "vesu::data_model::AssetPrice",
    "type": "struct",
    "members": [
      {
        "name": "value",
        "type": "core::integer::u256"
      },
      {
        "name": "is_valid",
        "type": "core::bool"
      }
    ]
  },
  {
    "name": "vesu::data_model::Context",
    "type": "struct",
    "members": [
      {
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "name": "extension",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "collateral_asset_config",
        "type": "vesu::data_model::AssetConfig"
      },
      {
        "name": "debt_asset_config",
        "type": "vesu::data_model::AssetConfig"
      },
      {
        "name": "collateral_asset_price",
        "type": "vesu::data_model::AssetPrice"
      },
      {
        "name": "debt_asset_price",
        "type": "vesu::data_model::AssetPrice"
      },
      {
        "name": "collateral_asset_fee_shares",
        "type": "core::integer::u256"
      },
      {
        "name": "debt_asset_fee_shares",
        "type": "core::integer::u256"
      },
      {
        "name": "max_ltv",
        "type": "core::integer::u64"
      },
      {
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "position",
        "type": "vesu::data_model::Position"
      }
    ]
  },
  {
    "name": "vesu::data_model::AssetParams",
    "type": "struct",
    "members": [
      {
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "floor",
        "type": "core::integer::u256"
      },
      {
        "name": "initial_rate_accumulator",
        "type": "core::integer::u256"
      },
      {
        "name": "initial_full_utilization_rate",
        "type": "core::integer::u256"
      },
      {
        "name": "max_utilization",
        "type": "core::integer::u256"
      },
      {
        "name": "is_legacy",
        "type": "core::bool"
      },
      {
        "name": "fee_rate",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "name": "core::array::Span::<vesu::data_model::AssetParams>",
    "type": "struct",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<vesu::data_model::AssetParams>"
      }
    ]
  },
  {
    "name": "vesu::data_model::LTVParams",
    "type": "struct",
    "members": [
      {
        "name": "collateral_asset_index",
        "type": "core::integer::u32"
      },
      {
        "name": "debt_asset_index",
        "type": "core::integer::u32"
      },
      {
        "name": "max_ltv",
        "type": "core::integer::u64"
      }
    ]
  },
  {
    "name": "core::array::Span::<vesu::data_model::LTVParams>",
    "type": "struct",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<vesu::data_model::LTVParams>"
      }
    ]
  },
  {
    "name": "core::array::Span::<core::felt252>",
    "type": "struct",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::felt252>"
      }
    ]
  },
  {
    "name": "vesu::data_model::ModifyPositionParams",
    "type": "struct",
    "members": [
      {
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "collateral",
        "type": "vesu::data_model::Amount"
      },
      {
        "name": "debt",
        "type": "vesu::data_model::Amount"
      },
      {
        "name": "data",
        "type": "core::array::Span::<core::felt252>"
      }
    ]
  },
  {
    "name": "vesu::data_model::UpdatePositionResponse",
    "type": "struct",
    "members": [
      {
        "name": "collateral_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "name": "collateral_shares_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "name": "debt_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "name": "nominal_debt_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "name": "bad_debt",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "name": "vesu::data_model::UnsignedAmount",
    "type": "struct",
    "members": [
      {
        "name": "amount_type",
        "type": "vesu::data_model::AmountType"
      },
      {
        "name": "denomination",
        "type": "vesu::data_model::AmountDenomination"
      },
      {
        "name": "value",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "name": "vesu::data_model::TransferPositionParams",
    "type": "struct",
    "members": [
      {
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "name": "from_collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "from_debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "to_collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "to_debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "from_user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "to_user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "collateral",
        "type": "vesu::data_model::UnsignedAmount"
      },
      {
        "name": "debt",
        "type": "vesu::data_model::UnsignedAmount"
      },
      {
        "name": "from_data",
        "type": "core::array::Span::<core::felt252>"
      },
      {
        "name": "to_data",
        "type": "core::array::Span::<core::felt252>"
      }
    ]
  },
  {
    "name": "vesu::data_model::LiquidatePositionParams",
    "type": "struct",
    "members": [
      {
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "receive_as_shares",
        "type": "core::bool"
      },
      {
        "name": "data",
        "type": "core::array::Span::<core::felt252>"
      }
    ]
  },
  {
    "name": "core::array::Span::<(core::starknet::contract_address::ContractAddress, vesu::data_model::AssetConfig)>",
    "type": "struct",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<(core::starknet::contract_address::ContractAddress, vesu::data_model::AssetConfig)>"
      }
    ]
  },
  {
    "name": "core::array::Span::<(core::starknet::contract_address::ContractAddress, core::starknet::contract_address::ContractAddress, vesu::data_model::LTVConfig)>",
    "type": "struct",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<(core::starknet::contract_address::ContractAddress, core::starknet::contract_address::ContractAddress, vesu::data_model::LTVConfig)>"
      }
    ]
  },
  {
    "name": "vesu::v2::singleton_v2::ISingletonV2",
    "type": "interface",
    "items": [
      {
        "name": "creator_nonce",
        "type": "function",
        "inputs": [
          {
            "name": "creator",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "extension",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "asset_config_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(vesu::data_model::AssetConfig, core::integer::u256)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "asset_config",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(vesu::data_model::AssetConfig, core::integer::u256)"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "ltv_config",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "vesu::data_model::LTVConfig"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "position_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(vesu::data_model::Position, core::integer::u256, core::integer::u256)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "position",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(vesu::data_model::Position, core::integer::u256, core::integer::u256)"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "check_collateralization_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(core::bool, core::integer::u256, core::integer::u256)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "check_collateralization",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "(core::bool, core::integer::u256, core::integer::u256)"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "rate_accumulator_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "rate_accumulator",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "utilization_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "utilization",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "delegation",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "delegator",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "delegatee",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "calculate_pool_id",
        "type": "function",
        "inputs": [
          {
            "name": "caller_address",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "nonce",
            "type": "core::felt252"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "calculate_debt",
        "type": "function",
        "inputs": [
          {
            "name": "nominal_debt",
            "type": "alexandria_math::i257::i257"
          },
          {
            "name": "rate_accumulator",
            "type": "core::integer::u256"
          },
          {
            "name": "asset_scale",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "calculate_nominal_debt",
        "type": "function",
        "inputs": [
          {
            "name": "debt",
            "type": "alexandria_math::i257::i257"
          },
          {
            "name": "rate_accumulator",
            "type": "core::integer::u256"
          },
          {
            "name": "asset_scale",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "calculate_collateral_shares_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral",
            "type": "alexandria_math::i257::i257"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "calculate_collateral_shares",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral",
            "type": "alexandria_math::i257::i257"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "calculate_collateral_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral_shares",
            "type": "alexandria_math::i257::i257"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "calculate_collateral",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral_shares",
            "type": "alexandria_math::i257::i257"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "deconstruct_collateral_amount_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral",
            "type": "vesu::data_model::Amount"
          }
        ],
        "outputs": [
          {
            "type": "(alexandria_math::i257::i257, alexandria_math::i257::i257)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "deconstruct_collateral_amount",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "collateral",
            "type": "vesu::data_model::Amount"
          }
        ],
        "outputs": [
          {
            "type": "(alexandria_math::i257::i257, alexandria_math::i257::i257)"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "deconstruct_debt_amount_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt",
            "type": "vesu::data_model::Amount"
          }
        ],
        "outputs": [
          {
            "type": "(alexandria_math::i257::i257, alexandria_math::i257::i257)"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "deconstruct_debt_amount",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt",
            "type": "vesu::data_model::Amount"
          }
        ],
        "outputs": [
          {
            "type": "(alexandria_math::i257::i257, alexandria_math::i257::i257)"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "context_unsafe",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "vesu::data_model::Context"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "context",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "user",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "vesu::data_model::Context"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "create_pool",
        "type": "function",
        "inputs": [
          {
            "name": "asset_params",
            "type": "core::array::Span::<vesu::data_model::AssetParams>"
          },
          {
            "name": "ltv_params",
            "type": "core::array::Span::<vesu::data_model::LTVParams>"
          },
          {
            "name": "extension",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "modify_position",
        "type": "function",
        "inputs": [
          {
            "name": "params",
            "type": "vesu::data_model::ModifyPositionParams"
          }
        ],
        "outputs": [
          {
            "type": "vesu::data_model::UpdatePositionResponse"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "transfer_position",
        "type": "function",
        "inputs": [
          {
            "name": "params",
            "type": "vesu::data_model::TransferPositionParams"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "liquidate_position",
        "type": "function",
        "inputs": [
          {
            "name": "params",
            "type": "vesu::data_model::LiquidatePositionParams"
          }
        ],
        "outputs": [
          {
            "type": "vesu::data_model::UpdatePositionResponse"
          }
        ],
        "state_mutability": "external"
      },
      {
        "name": "flash_loan",
        "type": "function",
        "inputs": [
          {
            "name": "receiver",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          },
          {
            "name": "is_legacy",
            "type": "core::bool"
          },
          {
            "name": "data",
            "type": "core::array::Span::<core::felt252>"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "modify_delegation",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "delegatee",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "delegation",
            "type": "core::bool"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "donate_to_reserve",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "retrieve_from_reserve",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "receiver",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "set_asset_config",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "params",
            "type": "vesu::data_model::AssetParams"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "set_ltv_config",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "ltv_config",
            "type": "vesu::data_model::LTVConfig"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "set_asset_parameter",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "parameter",
            "type": "core::felt252"
          },
          {
            "name": "value",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "set_extension",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "extension",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "set_extension_whitelist",
        "type": "function",
        "inputs": [
          {
            "name": "extension",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "approved",
            "type": "core::bool"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "claim_fee_shares",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "asset",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "migrate_pool",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "extension",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "creator",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "asset_configs",
            "type": "core::array::Span::<(core::starknet::contract_address::ContractAddress, vesu::data_model::AssetConfig)>"
          },
          {
            "name": "ltv_configs",
            "type": "core::array::Span::<(core::starknet::contract_address::ContractAddress, core::starknet::contract_address::ContractAddress, vesu::data_model::LTVConfig)>"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "migrate_position",
        "type": "function",
        "inputs": [
          {
            "name": "pool_id",
            "type": "core::felt252"
          },
          {
            "name": "collateral_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "debt_asset",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "from",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "to",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "set_migrator",
        "type": "function",
        "inputs": [
          {
            "name": "migrator",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "upgrade_name",
        "type": "function",
        "inputs": [],
        "outputs": [
          {
            "type": "core::felt252"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "upgrade",
        "type": "function",
        "inputs": [
          {
            "name": "new_implementation",
            "type": "core::starknet::class_hash::ClassHash"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "name": "OwnableTwoStepImpl",
    "type": "impl",
    "interface_name": "vesu::vendor::ownable::IOwnableTwoStep"
  },
  {
    "name": "vesu::vendor::ownable::IOwnableTwoStep",
    "type": "interface",
    "items": [
      {
        "name": "owner",
        "type": "function",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "pending_owner",
        "type": "function",
        "inputs": [],
        "outputs": [
          {
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "state_mutability": "view"
      },
      {
        "name": "accept_ownership",
        "type": "function",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "transfer_ownership",
        "type": "function",
        "inputs": [
          {
            "name": "new_owner",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [],
        "state_mutability": "external"
      },
      {
        "name": "renounce_ownership",
        "type": "function",
        "inputs": [],
        "outputs": [],
        "state_mutability": "external"
      }
    ]
  },
  {
    "name": "constructor",
    "type": "constructor",
    "inputs": [
      {
        "name": "singleton_v1",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "migrator",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::vendor::ownable::OwnableComponent::OwnershipTransferred",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::vendor::ownable::OwnableComponent::OwnershipTransferStarted",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "enum",
    "name": "vesu::vendor::ownable::OwnableComponent::Event",
    "type": "event",
    "variants": [
      {
        "kind": "nested",
        "name": "OwnershipTransferred",
        "type": "vesu::vendor::ownable::OwnableComponent::OwnershipTransferred"
      },
      {
        "kind": "nested",
        "name": "OwnershipTransferStarted",
        "type": "vesu::vendor::ownable::OwnableComponent::OwnershipTransferStarted"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::CreatePool",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "extension",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "creator",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::ModifyPosition",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "collateral_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "collateral_shares_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "debt_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "nominal_debt_delta",
        "type": "alexandria_math::i257::i257"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::TransferPosition",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "from_collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "from_debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "to_collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "to_debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "from_user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "to_user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "collateral_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "collateral_shares_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "debt_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "nominal_debt_delta",
        "type": "alexandria_math::i257::i257"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::LiquidatePosition",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "user",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "liquidator",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "collateral_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "collateral_shares_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "debt_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "nominal_debt_delta",
        "type": "alexandria_math::i257::i257"
      },
      {
        "kind": "data",
        "name": "bad_debt",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::AccrueFees",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "recipient",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "fee_shares",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::UpdateContext",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "collateral_asset_config",
        "type": "vesu::data_model::AssetConfig"
      },
      {
        "kind": "data",
        "name": "debt_asset_config",
        "type": "vesu::data_model::AssetConfig"
      },
      {
        "kind": "data",
        "name": "collateral_asset_price",
        "type": "vesu::data_model::AssetPrice"
      },
      {
        "kind": "data",
        "name": "debt_asset_price",
        "type": "vesu::data_model::AssetPrice"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::Flashloan",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "sender",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "amount",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::ModifyDelegation",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "delegator",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "delegatee",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "delegation",
        "type": "core::bool"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::Donate",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "amount",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::RetrieveReserve",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "receiver",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::SetLTVConfig",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "ltv_config",
        "type": "vesu::data_model::LTVConfig"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::SetAssetConfig",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::SetAssetParameter",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "parameter",
        "type": "core::felt252"
      },
      {
        "kind": "data",
        "name": "value",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::SetExtension",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "extension",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::MigratePosition",
    "type": "event",
    "members": [
      {
        "kind": "key",
        "name": "pool_id",
        "type": "core::felt252"
      },
      {
        "kind": "key",
        "name": "collateral_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "debt_asset",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "from",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "key",
        "name": "to",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "kind": "data",
        "name": "collateral_shares",
        "type": "core::integer::u256"
      },
      {
        "kind": "data",
        "name": "nominal_debt",
        "type": "core::integer::u256"
      }
    ]
  },
  {
    "kind": "struct",
    "name": "vesu::v2::singleton_v2::SingletonV2::ContractUpgraded",
    "type": "event",
    "members": [
      {
        "kind": "data",
        "name": "new_implementation",
        "type": "core::starknet::class_hash::ClassHash"
      }
    ]
  },
  {
    "kind": "enum",
    "name": "vesu::v2::singleton_v2::SingletonV2::Event",
    "type": "event",
    "variants": [
      {
        "kind": "flat",
        "name": "OwnableEvent",
        "type": "vesu::vendor::ownable::OwnableComponent::Event"
      },
      {
        "kind": "nested",
        "name": "CreatePool",
        "type": "vesu::v2::singleton_v2::SingletonV2::CreatePool"
      },
      {
        "kind": "nested",
        "name": "ModifyPosition",
        "type": "vesu::v2::singleton_v2::SingletonV2::ModifyPosition"
      },
      {
        "kind": "nested",
        "name": "TransferPosition",
        "type": "vesu::v2::singleton_v2::SingletonV2::TransferPosition"
      },
      {
        "kind": "nested",
        "name": "LiquidatePosition",
        "type": "vesu::v2::singleton_v2::SingletonV2::LiquidatePosition"
      },
      {
        "kind": "nested",
        "name": "AccrueFees",
        "type": "vesu::v2::singleton_v2::SingletonV2::AccrueFees"
      },
      {
        "kind": "nested",
        "name": "UpdateContext",
        "type": "vesu::v2::singleton_v2::SingletonV2::UpdateContext"
      },
      {
        "kind": "nested",
        "name": "Flashloan",
        "type": "vesu::v2::singleton_v2::SingletonV2::Flashloan"
      },
      {
        "kind": "nested",
        "name": "ModifyDelegation",
        "type": "vesu::v2::singleton_v2::SingletonV2::ModifyDelegation"
      },
      {
        "kind": "nested",
        "name": "Donate",
        "type": "vesu::v2::singleton_v2::SingletonV2::Donate"
      },
      {
        "kind": "nested",
        "name": "RetrieveReserve",
        "type": "vesu::v2::singleton_v2::SingletonV2::RetrieveReserve"
      },
      {
        "kind": "nested",
        "name": "SetLTVConfig",
        "type": "vesu::v2::singleton_v2::SingletonV2::SetLTVConfig"
      },
      {
        "kind": "nested",
        "name": "SetAssetConfig",
        "type": "vesu::v2::singleton_v2::SingletonV2::SetAssetConfig"
      },
      {
        "kind": "nested",
        "name": "SetAssetParameter",
        "type": "vesu::v2::singleton_v2::SingletonV2::SetAssetParameter"
      },
      {
        "kind": "nested",
        "name": "SetExtension",
        "type": "vesu::v2::singleton_v2::SingletonV2::SetExtension"
      },
      {
        "kind": "nested",
        "name": "MigratePosition",
        "type": "vesu::v2::singleton_v2::SingletonV2::MigratePosition"
      },
      {
        "kind": "nested",
        "name": "ContractUpgraded",
        "type": "vesu::v2::singleton_v2::SingletonV2::ContractUpgraded"
      }
    ]
  }
]