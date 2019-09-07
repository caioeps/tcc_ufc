defmodule EncryptorTcp.ProtocolTest do
  use ExUnit.Case, async: true

  test "it encrypts correctly" do
    payload = "action:encrypt;key:+HPontKVwoBPTatHXaNjXg==;data:Hey there, guys"

    response = EncryptorTcp.Protocol.handle_data(payload)

    assert response != "Hey there, guys"
  end

  test "it encrypts correctly when data has a semi-colon" do
    payload = "action:encrypt;key:+HPontKVwoBPTatHXaNjXg==;data:Hey there, guys; Whassup"

    response = EncryptorTcp.Protocol.handle_data(payload)

    assert response != "Hey there, guys; Whassup"
  end

  test "it encrypts correctly when data has a colon" do
    payload = "action:encrypt;key:+HPontKVwoBPTatHXaNjXg==;data:Hey there, guys: Whassup"

    response = EncryptorTcp.Protocol.handle_data(payload)

    assert response != "Hey there, guys: Whassup"
  end

  test "it encrypts and decrypts correctly" do
    key = "+HPontKVwoBPTatHXaNjXg=="
    data = "Hey there, guys"
    payload = "action:encrypt;key:" <> key <> ";data:" <> data

    response = EncryptorTcp.Protocol.handle_data(payload)

    decrypt_payload = "action:decrypt;key:" <> key <> ";data:" <> response
    response = EncryptorTcp.Protocol.handle_data(decrypt_payload)

    assert data == response
  end
end
