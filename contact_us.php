<!DOCTYPE html>
<html lang="en">
<?php require "includes/header1.php";?>

<body>
  <?php require "includes/header2.php";?>

  <div class="Contact_Us_title">
    <div class="text_content">
      <!-- <h2>CONTACT US</h2><br> -->
      <!-- <h3>SEND A MESSAGE</h3> -->
    </div>
  </div>
  </div>

  <div class="flex">

    <div class="form_wrapper" data-aos="fade-left">

      <?php

$invalid_email = $only_letters = $name_error = $email_error = "";

if (isset($_POST['submit'])) {
    require "includes/contact_info.php";

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    //                        $website = htmlspecialchars(trim($_POST['website']));

    if (isset($_POST['gender'])) {
        $gender = htmlspecialchars(trim($_POST['gender']));
    }

    $comment = htmlspecialchars(trim($_POST['comment']));

    if (empty($name)) {
        $name_error = "You must enter your name.";
    }

    //   if(!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[_a-z0-9+@#\/%=~_|]/i", $website))
    //   {
    //      $invalid_website = "enter a valid website";
    //   }

    if (empty($email)) {
        $email_error = " You must enter your email";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $invalid_email = "Enter correct email";
    }

    //   if(!preg_match("/^[a-zA-Z ]*$/", $invalid_website))
    //   {
    //      $only_letters = "enter a valid name";
    //   }

    //   if(empty($gender))
    //   {
    //      $gender_error = "You must select your gender";
    //   }

    else {
        $sql = "INSERT INTO contact_details (name, email, comment) VALUES('$name', '$email', '$comment')";

        if (mysqli_query($conn, $sql)) {
            echo "<span style='color:green; font-weight:bold; '>Thank you for contacting us.</span>";
        } else {
            echo "<span style='color:red; font-weight:bold; '>Registration failed</span>";
        }
    }

}

?>

      <h1>Contact US</h1> <br>
      <form method="POST">

















        <label class="name_wrapper" for="name">Full Name:</label><br>
        <input type="text" class="name" id="name" name="name" placeholder="Enter your Full name"
          value="<?php if (isset($_POST['name'])) {echo $name;}?>"> <span style='color:red; font-weight:bold; '>
          *</span>
        <?php echo "<span style='color:red; font-weight:bold; '> $name_error</span>"; ?>
        <?php echo "<span style='color:red; font-weight:bold; '> $only_letters</span>"; ?>
        <br><br>










        <label for="email">Email:</label><br>
        <input type="email" class="email_wrapper" id="email" name="email" placeholder="Enter your email"
          value="<?php if (isset($_POST['email'])) {echo $email;}?>"> <span style='color:red; font-weight:bold; '>
          *</span>
        <?php echo "<span style='color:red; font-weight:bold; '> $email_error</span>"; ?>
        <?php echo "<span style='color:red; font-weight:bold; '> $invalid_email</span>"; ?>
        <br><br>

        <!-- <label for=website">Website</label><br>
    <input type="text" class="email_wrapper" id="webside" name="website" placeholder="Enter your website"
    value="<?php // if(isset($_POST['website'])){echo $website;} ?>"><br>
    <?php // echo "<span style='color:red; font-weight:bold; '> $invalid_website</span>"; ?>

    <br>

    <label for=gender">Gender</label> <span style='color:red; font-weight:bold; '> *</span> <br>
    <input type="radio" id="gender" name="gender" value="male"  <?php //if(isset($_POST['gender']) && $gender == "male") {echo "Checked";} ?>>Male
    <input type="radio" id="gender" name="gender" value="female" <?php //if(isset($_POST['gender']) && $gender == "female") {echo "Checked";} ?>>Female <br><br> -->

        <label for="comment">Message:</label><br>
        <textarea class="comment_wrapper" name="comment" id="" cols="60" rows="10"></textarea>
        <br><br>



        <button class="form_submit floating_image_button" type="submit" name="submit">Send</button>

      </form>


    </div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.499942328528!2d3.247292764590073!3d6.45816204532787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b862322f4a5e7%3A0x1e3e8ea7bca235dd!2sKANO%20PLAZA%2C%20Trade%20Fair%20Complex%20102102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1669072112279!5m2!1sen!2sng"
      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" data-aos="fade-right"></iframe>
  </div>

  <i class="fa-solid fa-arrow-down"></i>


  <script src="javascripts/script1.js"></script>

  <?php include "includes/footer.php";?>

  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
  AOS.init({
    offset: 200,
    duration: 1000,
  });
  </script>

</body>

</html>