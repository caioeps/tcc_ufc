defmodule EncryptorTest do
  use ExUnit.Case
  doctest Encryptor

  test "greets the world" do
    assert Encryptor.hello() == :world
  end
end
