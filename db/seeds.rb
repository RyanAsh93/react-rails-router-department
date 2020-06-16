50.times do
  Product.create(
    name: Faker::Food.fruits,
    price: Faker::Commerce.price
  )
end

puts "50 products seeded"
