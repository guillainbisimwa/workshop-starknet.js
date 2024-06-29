#[starknet::interface]
pub trait IHelloStarknet<TContractState> {
    fn increase_balance(ref self: TContractState, amount: felt252);
    fn get_balance(ref self: TContractState) -> felt252;
    fn save_maize(ref self: TContractState, temperature: felt252, price: felt252, country: felt252);
    fn buy_maize(ref self: TContractState, buyer: felt252, seller: felt252, amount: felt252, temperature: felt252);
}

#[starknet::contract]
mod HelloStarknet {
    #[storage]
    struct Storage {
        balance: felt252,
        maize_temperature: felt252,
        maize_price: felt252,
        maize_country: felt252,
    }

    #[abi(embed_v0)]
    impl HelloStarknetImpl of super::IHelloStarknet<ContractState> {
        fn increase_balance(ref self: ContractState, amount: felt252) {
            assert(amount != 0, 'Amount cannot be 0');
            self.balance.write(self.balance.read() + amount);
        }

        fn get_balance(ref self: ContractState) -> felt252 {
            self.balance.read()
        }

        fn save_maize(ref self: ContractState, temperature: felt252, price: felt252, country: felt252) {
            self.maize_temperature.write(temperature);
            self.maize_price.write(price);
            self.maize_country.write(country);
        }

        fn buy_maize(ref self: ContractState, buyer: felt252, seller: felt252, amount: felt252, temperature: felt252) {
            // let temp_int = from_felt252(temperature);
            //assert(temp_int >= 4, 'Temperature must be at least 4 degrees Celsius');
            // assert(temperature >= 4, 'Temperature must be at least 4 degrees Celsius');
            let buyer_balance = self.get_balance();
            let seller_balance = self.get_balance();

            // assert(buyer_balance >= amount, 'Insufficient balance for buyer');

            self.balance.write(buyer_balance - amount);
            self.balance.write(seller_balance + amount);
        }

        
    }
}
