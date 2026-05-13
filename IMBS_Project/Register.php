<?php
include("database_connection.php");

$name = $_POST['name'] ?? '';
$nic = $_POST['nic'] ?? '';
$address = $_POST['address'] ?? '';
$gender = $_POST['gen'] ?? '';
$mobile = $_POST['mno'] ?? '';
$email = $_POST['e-mail'] ?? '';
$course = $_POST['course'] ?? '';


if (isset($_POST['register'])) {
    $sql = "INSERT INTO Student_Details (name, nic, address, gender, mobile, email, course)
            VALUES ('$name', '$nic', '$address', '$gender', '$mobile', '$email', '$course')";

    if ($conn->query($sql)) {
        echo "<script>alert('Student Registered Successfully'); window.location='Signup.html';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}


if (isset($_POST['update'])) {
    $sql = "UPDATE Student_Details 
            SET name='$name', address='$address', gender='$gender', mobile='$mobile', email='$email', course='$course'
            WHERE nic='$nic'";

    if ($conn->query($sql)) {
        echo "<script>alert('Student Details Updated');</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}

if (isset($_POST['delete'])) {
    $sql = "DELETE FROM Student_Details WHERE nic='$nic'";

    if ($conn->query($sql)) {
        echo "<script>alert('Student Removed');</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}


if (isset($_POST['search'])) {
    $sql = "SELECT * FROM Student_Details WHERE nic='$nic'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo "Name: " . $row['name'] . "<br>";
        echo "Address: " . $row['address'] . "<br>";
        echo "Course: " . $row['course'] . "<br>";
    } else {
        echo "<script>alert('No record found');</script>";
    }
}

$conn->close();
?>

