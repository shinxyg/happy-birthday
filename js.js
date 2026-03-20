            const giftContainer = document.getElementById('gift-container');
            const modal = document.getElementById('surprise-modal');
            const closeBtn = document.getElementById('closeBtn');
            const celebrateBtn = document.getElementById('celebrateBtn');
            const flame = document.getElementById('flame');
            const candle = document.getElementById('candle');
            const typewriterElement = document.getElementById('typewriter-text');

            const myMessage = "Happy Birthday! 🎂 Sobrang thankful ako na naging part ka ng buhay ko. Sana magustuhan mo itong simpleng surprise na ginawa ko para sa'yo. Deserve mo sumaya na ngayong araw! u can blow the candleee mich iloveeeeeeyouuuuuuu!";

            let charIndex = 0;
            let typingStarted = false;
            let typingTimeout;

            // Open Modal
            giftContainer.addEventListener('click', () => {
                giftContainer.style.opacity = '0';
                setTimeout(() => {
                    giftContainer.style.display = 'none';
                    modal.style.display = 'block';
                    if (!typingStarted) {
                        typingStarted = true;
                        setTimeout(typeWriter, 800);
                    }
                }, 300);
            });

            // Close Modal Logic
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                giftContainer.style.display = 'block';
                giftContainer.style.opacity = '1';
                clearTimeout(typingTimeout);
                charIndex = 0;
                typewriterElement.innerHTML = "";
                typingStarted = false;
                document.querySelector('.cursor').style.display = 'inline';
                flame.style.display = 'block';
            });

            // Typewriter Logic
            function typeWriter() {
                if (charIndex < myMessage.length) {
                    typewriterElement.innerHTML += myMessage.charAt(charIndex);
                    charIndex++;
                    typingTimeout = setTimeout(typeWriter, 50);
                } else {
                    document.querySelector('.cursor').style.display = 'none';
                }
            }

            // Celebrate Confetti
            celebrateBtn.addEventListener('click', () => {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#ff4081', '#ffeb3b', '#2196f3']
                });
                createBalloons();
            });

            // Blow the Candle
            candle.addEventListener('click', () => {
                flame.style.display = 'none';
                confetti({
                    particleCount: 80,
                    startVelocity: 30,
                    spread: 360,
                    origin: { x: 0.5, y: 0.45 }
                });
            });

            // Balloons
            function createBalloons() {
                const container = document.getElementById('balloon-container');
                const colors = ['#ff4081', '#3f51b5', '#4caf50', '#ffeb3b', '#ff5722'];
                for (let i = 0; i < 15; i++) {
                    const balloon = document.createElement('div');
                    balloon.className = 'balloon';
                    balloon.style.left = Math.random() * 100 + 'vw';
                    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    balloon.style.animationDelay = Math.random() * 2 + 's';
                    balloon.style.opacity = '0.7';
                    container.appendChild(balloon);
                    setTimeout(() => balloon.remove(), 6000);
                }
            }
