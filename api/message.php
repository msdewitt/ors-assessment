<?php

class message {

  public function __construct($mysqli) {
    $this->mysqli = $mysqli;
  }

  /**
   * TODO 3
   *
   * Document and write this function. It should read messages from the
   * database and return them as an array.
   */
  public function read($arguments) {
    return array();
  }

  /**
   * Create a new message.
   *
   * @param array $arguments [name, message]
   *
   * @return array The newly created message.
   */
  public function create($arguments) {
    $query = '
      insert into
        `message`(
          `name`,
          `message`
        )
        values(
          "' . $this->mysqli->real_escape_string($arguments['name']) . '",
          "' . $this->mysqli->real_escape_string($arguments['message']) . '"
        )
    ';
    $this->mysqli->query($query) or die($this->mysqli->error);
    $message_id = $this->mysqli->insert_id;

    $query = '
      select
        *
      from
        `message`
      where
        `message_id` = ' . $message_id
    ;
    $result = $this->mysqli->query($query) or die($this->mysqli->error);
    $message = $result->fetch_assoc();

    return $message;
  }

}
