# index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kajal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <div class="whole">
            <h1 class="N1">New Year 2025 is coming soon, IIT Kanpur ka TEMPOHIGH HAI</h1>
            <div class="leftsidebar">
                <div>
                    <h1 class="N3">New Year Countdown</h1>
                    <div class="N2">
                        <span class="d1"id="days"></span>:
                        <span class="d2"id="hours"></span>:
                        <span class="d3"id="minutes"></span>:
                        <span class="d4"id="seconds"></span>
                    </div>
                    <div class="p1">
                    <a class="p2"  href="Happy_New.html">Preview</a>
                    </div>
                     </div>
        </div>
        <div class="rightsidebar">
            <h1 class="c1">Kajal</h1>
            <img src="Screenshot 2023-11-02 231857.png" alt="My Image" width="100" height="100">
            <div id="Kajal">
                <div>
                    <p class="c2"><b>Name</b>: Kajal</p>
                    <p class="c3"><b>Roll no.</b> : 230513</p>
                    <p class="c4"><b>About</b> : I am Kajal Kumari, a driven individual pursuing a B.Tech in Electrical Engineering at IIT Kanpur.
                   With a strong background in technology and problem-solving, I have excelled in competitive exams, securing a top 5% rank in the Algouniversity Technology Fellowship.
                    My passion for data structures and algorithms.</p>
                    <p><b>Skills</b> : C++, Data Structures and Algorithm, Problem Solving</p>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kajal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg">
    <h1 class="c5">Happy New Year</h1>
    <h2 class="c6">May this year brings you a lot of happiness and blessing</h2>
</body>
</html>
<style>
.leftsidebar{
    margin-top: 100px;margin-left: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 500px; 
    height: 400px;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    float: left;
}
.rightsidebar{
    margin-top: 100px;margin-right: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    width: 500px;
    height: 400px; 
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    float: right;
    }
body{
    font-style: oblique;font-display:calc();
    background-image: url('b2.png'); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
}
.N1{
    margin-left: 150px;font-size: 40px;width: 1250px;height: 50px;background-image:url('b3.png');border-radius: 50%;
}
.N2{
    font-size: 28px;font-weight: bold;color: #222;margin-bottom: 20px;
}
.N3{
    margin-top: 60px;margin-bottom: 20px; font-size:50px;
}
.p1{
    margin-top: 40px;margin-bottom: 50px;margin-left:160px;width: 60px; height:20px;background-color:rgb(0, 191, 255); text-align:center;font-family:Georgia, 'Times New Roman', Times, serif;
}
.p2{
    background-color: #007BFF;color: white;border: none; padding: 10px 20px;font-size: 16px;font-weight: bold;border-radius: 5px;cursor: pointer;
}
.d1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size:larger;
}
.d2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size:larger;
}
.d3{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size:larger;
}
.d4{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;font-size:larger;padding-bottom:20px
}
.c1{
    margin-left: 1px;
}
.c2{
    text-align: center;
}
.c3{
    text-align: center;
}
.c4{
    margin-left:800; padding: 10px; text-align: center;
}
.c5{
    margin-top: 220px;margin-bottom: 200px;margin-left:260px;margin-right:60px;font-size:100px;font-style: oblique;font-display:calc();width: 1000px; height:20px; text-align:center;font-family:Georgia, 'Times New Roman', Times, serif;
}
.c6{
    margin-top: 100px;margin-bottom: 500px;margin-left:200px;margin-right:60px;font-size:50px;width: 1000px;font-style: oblique;font-display:calc();; height:20px; text-align:center;font-family:Georgia, 'Times New Roman', Times, serif;
}
.bg{
            background-image: url('background.png'); 
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
}
</style>
<script>
const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();
function updateCountdown() {
const now = new Date().getTime();
const distance = newYearDate - now;
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
if (distance <= 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Happy New Year!";
        document.getElementById('Happy_New.html').click();
    }
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();ipt>  
</script>
