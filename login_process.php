<?php
// Predefined mock credentials
$mockUsername = 'demo';
$mockPassword = 'password123';

// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Check if the provided username and password match the predefined values
if ($username === $mockUsername && $password === $mockPassword) {
    // Successful mock login, redirect to a welcome page or dashboard
    header('Location: welcome.php');
    exit;
} else {
    // Invalid credentials, display an error message
    echo 'Invalid username or password. Please try again.';
}
?>
