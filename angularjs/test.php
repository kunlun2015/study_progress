<?php
/**
 * 
 * @authors Amos
 * @date    2016-06-04 10:04:39
 * @copyright www.weipaidang.net
 */
$post_data = file_get_contents ("php://input");
$post_data = json_decode($post_data, true);
$return =array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
exit(json_encode($return));