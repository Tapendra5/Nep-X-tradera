let user_id = 1; // Test user_id
let pointsSpan = document.getElementById('points');
document.getElementById('spinBtn').addEventListener('click', async () => {
    let res = await fetch('http://127.0.0.1:5000/spin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user_id })
    });
    let data = await res.json();
    if(res.status===200){
        pointsSpan.innerText = data.total_points;
        alert(`You earned ${data.earned} points!`);
    } else {
        alert(data.message);
    }
});
