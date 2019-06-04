
#!/bin/bash

docker run --rm --net containerName_default --link containerName_database_1:mongo -v /root:/backup mongo  bash -c "mongorestore /backup --host mongo:27017"

