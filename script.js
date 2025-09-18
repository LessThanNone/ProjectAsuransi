document.addEventListener("DOMContentLoaded", () => {

    const tampilPesan = (message, type) => {
        const messageDiv = document.getElementById('message');
        if (messageDiv) {
            messageDiv.textContent = message;
            messageDiv.className = `message ${type}`; 
        }
    };

    const validasiEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const loginForm = document.getElementById('form-login'); 
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email === '' || password === '') {
                tampilPesan('Email dan kata sandi harus diisi.', 'error');
                return;
            }

            if (!validasiEmail(email)) {
                tampilPesan('Format email tidak valid.', 'error');
                return;
            }

            if (password === "password123") {
                tampilPesan('Login berhasil! Anda akan diarahkan ke halaman utama...', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                tampilPesan('Email atau kata sandi yang Anda masukkan salah.', 'error');
            }
        });
    }

    const signupForm = document.getElementById('form-signup');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // DIUBAH: sesuaikan semua id dengan HTML baru
            const fullName = document.getElementById('nama-lengkap').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('no-telepon').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('konfirmasi-pw').value.trim();

            if (!fullName || !email || !phone || !password || !confirmPassword) {
                tampilPesan('Semua kolom wajib diisi.', 'error');
                return;
            }

            if (fullName.length < 3 || fullName.length > 32) {
                tampilPesan('Nama lengkap harus terdiri dari 3 hingga 32 karakter.', 'error');
                return;
            }
            if (!/^[a-zA-Z\s]+$/.test(fullName)) {
                tampilPesan('Nama lengkap tidak boleh mengandung angka.', 'error');
                return;
            }

            if (!validasiEmail(email)) {
                tampilPesan('Format email tidak valid.', 'error');
                return;
            }

            if (!/^08[0-9]{8,14}$/.test(phone)) {
                tampilPesan('Format nomor handphone salah. Contoh: 081234567890 (10-16 digit).', 'error');
                return;
            }
            
            if (password.length < 8) {
                tampilPesan('Kata sandi minimal harus 8 karakter.', 'error');
                return;
            }

            if (password !== confirmPassword) {
                tampilPesan('Kata sandi dan konfirmasi kata sandi tidak cocok.', 'error');
                return;
            }

            tampilPesan('Pendaftaran berhasil! Anda akan diarahkan ke halaman login.', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }
});