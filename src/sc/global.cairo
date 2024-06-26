%lang starknet

struct TransitInfo {
    temperature: felt,
    transit_company: felt,
    departure_date: felt,
    arrival_date: felt,
}

@storage_var
func total_sales() -> (total: felt):
end

@storage_var
func product_info(product_id: felt) -> (seller: felt, buyer: felt, product_type: felt, weight: felt, price: felt, transit_info: TransitInfo):
end

@external
func register_product(seller: felt, buyer: felt, product_type: felt, weight: felt, price: felt, temperature: felt, transit_company: felt, departure_date: felt, arrival_date: felt):
    let (id) = total_sales.read()
    let transit_info = TransitInfo(temperature, transit_company, departure_date, arrival_date)
    product_info.write(id, (seller, buyer, product_type, weight, price, transit_info))
    total_sales.write(id + 1)
    return ()
end

@view
func get_product_info(product_id: felt) -> (seller: felt, buyer: felt, product_type: felt, weight: felt, price: felt, transit_info: TransitInfo):
    let (product) = product_info.read(product_id)
    return product
end
