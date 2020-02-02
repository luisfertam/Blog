<!DOCTYPE html>

<html lang="en">
  <head>
    <title>Blog</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
  </head>

  <body>
    
    <div class="header">
      <h1>Blog</h1>
      <p>A blog talking about dutch people</p>
    </div>

    <div class="row">
      <div class="side">
        <h2>About Us</h2>
        <p>We are Luis Fernández and Jairo Leal, students of an english class at the University of the North.</p>
      </div>

      <div class="main">
        <h2>DUTCH PEOPLE</h2>
        <h5>week 1, 01 Jan 2020</h5>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        
        <br>
        
        <h2>TITLE EXAMPLE</h2>
        <h5>Some week, some date</h5>
        <p>a brief resume of the text that come</p>
        <p>now this text is about some thing thatwe need to say to make us enable to take the 5% of the project one, so on for 4 more weeks :)</p>
        
        <!--
        <br>
        <h2>TITLE HEADING</h2>
        <h5>Title description, Sep 2, 2017</h5>
        <div class="fakeimg" style="height:200px;">Image</div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        -->
        
        <br>
        <h2>═════════════════  COMMENTS SECTION ═════════════════</h2>
        <form action="" method="POST">
          <label> Name: 
          <input type="text" name="Name" class="Input" style="width: 250px" required>
          </label>
          <br><br>
          <label> Comment: <br>
          <textarea name="Comment" class="Input" style="width: 302px; margin: 0px; height: 50px;" required></textarea>
          </label>
          <br><br>
          <input type="submit" name="Submit" value="Comentar" class="Submit">
        </form>
        <br/>

        <?php
          if($_POST['Submit']){

            $Name = $_POST['Name'];
            $Comment = $_POST['Comment'];

            #Get old comments
            $old = fopen("comments.txt", "r+t");
            $old_comments = fread($old, 1024);

            #Delete everything, write down new and old comments
            $write = fopen("comments.txt", "w+");
            $string = "<b>".$Name."</b><br>".$Comment."<br><br/>".$old_comments;
            fwrite($write, $string);
            fclose($write);
            fclose($old);
          }

          #Read comments
          $read = fopen("comments.txt", "r+t");
          echo "<br><br>Comments<hr>".fread($read, 1024);
          fclose($read);

          ?>

      </div>
    </div>

  </body>
</html>