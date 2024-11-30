const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready -h localhost", handleReturn);

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    process.stdout.write(
      "\n🟢 PostgreSQL is ready and accepting connections!\n\n",
    );
  }
}

process.stdout.write("\n🟡 Waiting for PostgreSQL to accept connections");
checkPostgres();
