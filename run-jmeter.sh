set -e

export timestamp=$(date +%Y%m%d_%H%M%S)

docker-compose run encryptor_client rails jmeter:generate_test_plan

jmeter -n -f \
  -t encryptor_client/aggregated_test_plan.jmx \
  -l jmeter_results/aggregated/result.jtl \
  -j jmeter_results/aggregated/jmeter.log \
  -o jmeter_results/aggregated

exit 0

echo 'Benchmarking LOCAL'
jmeter -n -f \
  -t encryptor_client/local_encryption_plan.jmx \
  -l jmeter_results/local/result.jtl \
  -j jmeter_results/local/jmeter.log \
  -o jmeter_results/local

echo 'Benchmarking REMOTE'
jmeter -n -f \
  -t encryptor_client/remote_encryption_plan.jmx \
  -l jmeter_results/remote/result.jtl \
  -j jmeter_results/remote/jmeter.log \
  -o jmeter_results/remote

echo 'Benchmarking PGP'
jmeter -n -f \
  -t encryptor_client/pg_pgp_encryption_plan.jmx \
  -l jmeter_results/pgp/result.jtl \
  -j jmeter_results/pgp/jmeter.log \
  -o jmeter_results/pgp
