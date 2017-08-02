<?php

/**
 * Set these variables to match your configuration. Use the below query to set
 * up the messages table. Make sure you create a database first. After you set
 * this up, you should be able to open the application and send a message that
 * gets stored in the database.
 *
 * create table `message` (
 *  `message_id` int(10) unsigned not null auto_increment,
 *  `name` varchar(255) not null,
 *  `message` varchar(1000) not null,
 *  `timestamp` timestamp not null default current_timestamp on update current_timestamp,
 *  primary key (`message_id`)
 * );
 */
$database_host = ''; // IP address or hostname of your database
$database_username = '';
$database_password = '';
$database_name = ''; // Name of the database that contains the messages table











// Compress output.
ob_start('ob_gzhandler');

// Set a reasonable time limit.
set_time_limit(5);

// Turn on all error reporting.
error_reporting(-1);
ini_set('display_errors', '1');

// Autoload classes as necessary so there are no includes/requires.
spl_autoload_register();

// Create the database object.
$mysqli = new mysqli(
  $database_host,
  $database_username,
  $database_password,
  $database_name
);

// Create the resource and do the API call.
$resource = new $_REQUEST['resource']($mysqli);
$response = call_user_func(
  array($resource, $_REQUEST['method']),
  json_decode($_REQUEST['arguments'], true)
);

// Return the API response as JSON.
die(json_encode($response));
