
#!/bin/bash

docker run --rm --net containerName_default --link containerName_database_1:mongo -v /root:/backup mongo  bash -c "mongodump --out /backup --host mongo:27017"
