n = case Rails.configuration.database_configuration["development"]["database"]
    when /_production/
      50
    when /small$/
      50
    when /medium$/
      500
    when /large$/
      1000
    end

names     = n.times.map { |i| "User ##{i}" }
emails    = n.times.map { |i| "email.#{i}@email.com" }
addresses = n.times.map { |i| "User Address #{i}" }

values = names.zip(emails, addresses)

models = [User, UserWithLocalEncryption, UserWithPostgresPgpEncryption]

ApplicationRecord.transaction do
  values.each do |name, email, address|
    models.map do |model|
      model.create!(name: name, email: email, address: address)
    end
  end
end
