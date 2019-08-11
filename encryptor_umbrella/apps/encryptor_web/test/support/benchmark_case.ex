defmodule EncryptorWeb.BenchmarkCase do
  def measure(iterations_n, func) do
    measures = measure(iterations_n, func, [], 0)

    mean = Statistics.mean(measures)
    max  = Statistics.max(measures)
    min  = Statistics.min(measures)

    {mean, max, min}
  end

  defp measure(iterations_n, _func, _measures, n) when n >= iterations_n, do: []

  defp measure(iterations_n, func, measures, n) do
    start = System.monotonic_time(:microsecond)
    func.()
    ending = System.monotonic_time(:microsecond)
    time_spent = ending - start

    [time_spent] ++ measure(iterations_n, func, measures, n + 1)
  end
end
