const result = document.getElementById("result");
const input = document.getElementById("inputt");

function run() {
    const text = input.value.trim();
    if (text === "") {
        alert("Bạn chưa nhập lời nhắn!");
        return;
    }

    result.textContent = "Đang gửi...";
    result.classList.add("show");

    setTimeout(() => {
        const finalText = `Xin lỗi cậu...`;
        result.textContent = "";
        let i = 0;

        function typeWriter() {
            if (i < finalText.length) {
                result.textContent += finalText[i];
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        typeWriter();
    }, 1500);
}
