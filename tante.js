const messages = [
  "SUDAH TERBIASA TERJADI TANTEE...",
  "TEMAN DATANG KETIKA LAGI BUTUH SAJAA...",
  "COBA KALAU LAGI SUSAHH..",
  "MEREKA SEMUA MENGHILAAAANNNNGGGGGG..."
];

const typingSpeed = 90;        // kecepatan ketik per huruf
const lineDelay = 800;         // jeda antar baris (ms)
const lineSpacing = 1;         // jumlah baris kosong antar teks
const finalDelay = 1000;       // jeda sebelum muncul "TANTEE...."

let currentMessage = 0;
let currentChar = 0;

function typeLine(line, next) {
  if (currentChar < line.length) {
    process.stdout.write(line[currentChar]);
    currentChar++;
    setTimeout(() => typeLine(line, next), typingSpeed);
  } else {
    process.stdout.write('\n' + '\n'.repeat(lineSpacing));
    currentChar = 0;
    if (next) setTimeout(next, lineDelay);
  }
}

function playMessages() {
  if (currentMessage < messages.length) {
    const line = messages[currentMessage];
    typeLine(line, playMessages);
    currentMessage++;
  } else {
    // setelah semua message selesai, tunggu dan ketik "TANTEE...."
    setTimeout(() => {
      const finalLine = "TANTEE....";
      typeLine(finalLine);
    }, finalDelay);
  }
}

playMessages();
