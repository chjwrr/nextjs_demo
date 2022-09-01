#!/bin/bash
cur_timestamp=$((`date '+%s'`*1000+`date '+%N'`/1000000))

rm test-ceres.zip
yarn build
zip -r test-ceres.zip build

end_timestamp=$((`date '+%s'`*1000+`date '+%N'`/1000000))
echo $[(end_timestamp-cur_timestamp)/1000]"秒"
