// Registry of interactive labs, grouped into topic sections for the Labs index.
// `category` links a lab to a learning area (see categories.js).

export const labSections = [
  {
    id: "encoding-hashing",
    title: "Encoding & hashing",
    intro: "How data is represented as bytes, and how hash functions turn any input into a fixed-size fingerprint used for integrity checks.",
    labs: [
      { slug: "encoding", title: "Text, hex and Base64", tag: "Encoding", category: "cryptography", desc: "Convert between UTF-8 text, hexadecimal and Base64, and see why encoding is not encryption." },
      { slug: "sha-256", title: "SHA-256 digest", tag: "SHA-2", category: "cryptography", desc: "Calculate a SHA-256 digest of your own text." },
      { slug: "hash-functions", title: "Hash function comparison & avalanche effect", tag: "SHA-1 · SHA-2", category: "cryptography", desc: "Compare SHA-1, SHA-256, SHA-384 and SHA-512, and count how many output bits flip when one character changes." },
      { slug: "hmac", title: "HMAC message authentication", tag: "HMAC-SHA256", category: "cryptography", desc: "Create and verify a keyed MAC, then see what happens when the message or key is changed." }
    ]
  },
  {
    id: "symmetric",
    title: "Symmetric encryption",
    intro: "One shared secret key both encrypts and decrypts. AES in an authenticated mode protects most data in transit and at rest today.",
    labs: [
      { slug: "aes-gcm", title: "AES-GCM authenticated encryption", tag: "AES-256-GCM", category: "cryptography", desc: "Encrypt and decrypt with AES-GCM, then flip a bit in the ciphertext and watch decryption refuse it." }
    ]
  },
  {
    id: "passwords",
    title: "Passwords & key derivation",
    intro: "Passwords are low-entropy secrets. Key-derivation functions add a salt and deliberate cost so stolen password databases are slow to attack.",
    labs: [
      { slug: "password-hashing", title: "PBKDF2 with salt and iterations", tag: "PBKDF2-SHA256", category: "cybersecurity", desc: "Derive a key from a password, change the salt or iteration count, and measure the cost." },
      { slug: "password-strength", title: "Password entropy estimator", tag: "Entropy", category: "cybersecurity", desc: "Estimate the search space of a password and how long a brute-force attack might take." }
    ]
  },
  {
    id: "public-key",
    title: "Public-key cryptography",
    intro: "Key pairs let strangers exchange secrets and verify each other's messages. These labs generate real keys inside your browser.",
    labs: [
      { slug: "rsa-oaep", title: "RSA-OAEP encryption", tag: "RSA-2048", category: "cryptography", desc: "Generate an RSA key pair, encrypt with the public key and decrypt with the private key." },
      { slug: "digital-signatures", title: "Digital signatures", tag: "ECDSA · Ed25519 · RSA-PSS", category: "cryptography", desc: "Sign a message, verify it, then tamper with the message and see verification fail." },
      { slug: "ecdh", title: "ECDH key exchange", tag: "P-256 · X25519", category: "cryptography", desc: "Alice and Bob each generate a key pair and arrive at the same shared secret without ever sending it." }
    ]
  },
  {
    id: "web-identity",
    title: "Web security & identity",
    intro: "Tokens and signatures that carry identity across the web.",
    labs: [
      { slug: "jwt", title: "JSON Web Token decoder & signer", tag: "JWT · HS256", category: "network-security", desc: "Decode a JWT, inspect its claims, and sign or verify one with a shared secret." }
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain & integrity structures",
    intro: "Hash links and hash trees make tampering detectable. These ideas underpin my PhD research on video integrity.",
    labs: [
      { slug: "merkle-tree", title: "Merkle tree & inclusion proof", tag: "SHA-256", category: "blockchain", desc: "Build a Merkle tree from your own records, then prove one record is included using only a few hashes." },
      { slug: "proof-of-work", title: "Mini blockchain with proof of work", tag: "SHA-256 · PoW", category: "blockchain", desc: "Mine blocks at different difficulties, edit an old block and watch the chain break." }
    ]
  },
  {
    id: "classical",
    title: "Classical ciphers",
    intro: "Historic ciphers are insecure today, but they are the clearest way to see why frequency analysis works and why modern ciphers are designed as they are.",
    labs: [
      { slug: "classical-ciphers", title: "Caesar & Vigenère with frequency analysis", tag: "Classical", category: "cryptography", desc: "Encrypt with a shift or keyword cipher and break it by comparing letter frequencies with English." }
    ]
  }
];

export const labs = labSections.flatMap((section) => section.labs.map((lab) => ({ ...lab, section: section.title })));
