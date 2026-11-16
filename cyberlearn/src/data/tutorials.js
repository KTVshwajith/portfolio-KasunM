export const tutorials = [
  {
    slug: "cia-triad",
    labs: ["hmac", "aes-gcm"],
    category: "cybersecurity",
    title: "The CIA Triad: Confidentiality, Integrity and Availability",
    level: "Beginner",
    time: "8 min",
    summary: "Understand the three foundational objectives used to reason about information security.",
    intro: "The CIA triad is a widely used model for describing the core objectives of information security. It helps teams reason about what they are protecting and what can go wrong.",
    sections: [
      { heading: "Confidentiality", body: "Confidentiality means information is accessible only to people, systems or processes that are authorised to access it. Encryption, access controls and data classification can help protect confidentiality." },
      { heading: "Integrity", body: "Integrity means information remains accurate, complete and protected against unauthorised alteration. Hash functions, digital signatures, access controls and audit logs can help detect or prevent unwanted changes." },
      { heading: "Availability", body: "Availability means authorised users can access systems and information when they need them. Backups, redundancy, capacity planning, patching and resilience planning all contribute to availability." },
      { heading: "Putting the model to work", body: "Consider an online payment service. Confidentiality protects customer information, integrity helps ensure transaction details are not altered, and availability helps keep the service accessible. A single incident may affect more than one objective." }
    ],
    takeaway: "Security decisions often involve balancing confidentiality, integrity and availability. The right balance depends on the system, its users and the consequences of failure.",
    exercise: "Choose a digital service you use. Write one example of a confidentiality risk, an integrity risk and an availability risk for that service."
  },
  {
    slug: "sha-256",
    labs: ["sha-256", "hash-functions"],
    category: "cryptography",
    title: "Understanding SHA-256 Hashing",
    level: "Beginner",
    time: "10 min",
    summary: "Learn what a cryptographic hash is and experiment with a real SHA-256 digest in your browser.",
    intro: "SHA-256 is a cryptographic hash function in the SHA-2 family. It takes an input of arbitrary length and produces a 256-bit digest. A hash is designed to be a one-way transformation, not a form of encryption.",
    sections: [
      { heading: "What is a hash?", body: "A hash function maps input data to a fixed-size output. The same input produces the same digest, while a small input change should produce a substantially different-looking result." },
      { heading: "Important properties", body: "Cryptographic hash functions aim to provide preimage resistance, second-preimage resistance and collision resistance. These properties make them useful for integrity checking and many cryptographic protocols." },
      { heading: "Hashing is not encryption", body: "Encryption is designed to be reversible with the correct key. Hashing is not intended to be reversed. Do not store passwords as plain SHA-256 hashes: password storage should use a dedicated password-hashing scheme such as Argon2id, scrypt or bcrypt, with appropriate parameters and salts." },
      { heading: "Where is SHA-256 used?", body: "SHA-256 is used in integrity checks, digital signature systems, content addressing and many security protocols. Its role depends on the larger design in which it is used." }
    ],
    takeaway: "A digest can help detect whether data has changed, but a hash alone does not prove who created the data or whether it came from a trusted source.",
    exercise: "Open the SHA-256 laboratory, hash a short phrase, then change one character and compare the output."
  },
  {
    slug: "rsa-encryption",
    labs: ["rsa-oaep", "digital-signatures"],
    category: "cryptography",
    title: "RSA Encryption: Public and Private Keys",
    level: "Beginner",
    time: "12 min",
    summary: "Understand the high-level mathematics behind RSA and the role of key pairs.",
    intro: "RSA is a public-key cryptographic algorithm whose security is related to the difficulty of factoring large integers. It uses a public key and a corresponding private key.",
    sections: [
      { heading: "The key-pair idea", body: "A public key can be shared, while the private key must be protected. In a simplified explanation, a sender can use a recipient's public key to encrypt data, and the recipient uses the private key to decrypt it." },
      { heading: "Where the mathematics comes in", body: "RSA key generation uses large prime numbers to construct a modulus and related key values. The mathematical relationships allow operations with the public and private exponents." },
      { heading: "Padding matters", body: "Real-world RSA must use secure, standardised padding schemes. For encryption, RSA-OAEP is commonly recommended; for signatures, RSA-PSS is a modern option. Textbook RSA without padding is not secure." },
      { heading: "RSA in modern systems", body: "RSA is often used for key establishment or digital signatures rather than directly encrypting large files. Modern protocols may use elliptic-curve methods and authenticated symmetric encryption instead." }
    ],
    takeaway: "The public/private key model is powerful, but secure implementations depend on correct padding, key sizes, randomness, key management and protocol design.",
    exercise: "Explain why a public key can be distributed openly while the private key must remain secret. Find one protocol or application that uses public-key cryptography."
  },
  {
    slug: "merkle-trees",
    labs: ["merkle-tree"],
    category: "blockchain",
    title: "Merkle Trees: Verifying Data Integrity",
    level: "Intermediate",
    time: "12 min",
    summary: "Discover how hashes can be organised into a tree to verify large collections of data efficiently.",
    intro: "A Merkle tree is a tree-shaped data structure in which leaf nodes represent hashes of data items and parent nodes are derived from the hashes of their children. The root hash summarises the structure.",
    sections: [
      { heading: "Leaf hashes", body: "Each data item is hashed to create a leaf. If the underlying item changes, its hash is expected to change as well." },
      { heading: "Parent hashes", body: "Pairs of child hashes are combined and hashed to create parent nodes. This process repeats until a single root hash remains." },
      { heading: "Proof of inclusion", body: "A Merkle proof provides the sibling hashes needed to recompute a path from a particular leaf to the root. This can verify inclusion without downloading every item in the dataset." },
      { heading: "Applications", body: "Merkle trees are used in distributed systems, version-control structures, blockchains and other systems that need efficient integrity verification." }
    ],
    takeaway: "A Merkle root is a compact commitment to a set of data, but verification still depends on trusted algorithms, correct tree construction and a trustworthy reference root.",
    exercise: "Draw a Merkle tree for four sample records. Label the leaf hashes, intermediate hashes and root."
  },
  {
    slug: "blockchain-basics",
    labs: ["proof-of-work"],
    category: "blockchain",
    title: "Blockchain Fundamentals: Blocks, Hashes and Consensus",
    level: "Beginner",
    time: "10 min",
    summary: "Learn the core components of a blockchain and why distributed consensus is needed.",
    intro: "A blockchain is a type of distributed ledger in which records are organised into blocks and linked using cryptographic hashes. Different blockchain systems use different consensus and governance designs.",
    sections: [
      { heading: "Blocks and hash links", body: "A block commonly contains data, metadata and a reference to the previous block's hash. This linking makes changes to historical records detectable, although it does not by itself prevent every form of tampering." },
      { heading: "Distributed copies", body: "Participants may maintain copies of the ledger. Replication can improve resilience and transparency, but introduces questions about synchronisation, permissions and governance." },
      { heading: "Consensus", body: "Consensus mechanisms help participants agree on the state and ordering of records. Proof of Work, Proof of Stake and permissioned consensus designs make different trade-offs." },
      { heading: "Security is more than hashes", body: "A blockchain application also depends on identity, key management, software quality, smart-contract security, governance and the security of systems around the ledger." }
    ],
    takeaway: "Blockchain combines data structures, cryptography, distributed systems and governance. A hash-linked ledger is not automatically private, anonymous or secure in every context.",
    exercise: "Describe one situation where a shared, tamper-evident record could be useful. Identify who should be allowed to write to it and who should verify it."
  },
  {
    slug: "deepfake-detection-introduction",
    category: "ai-security",
    title: "Introduction to Deepfake Detection",
    level: "Intermediate",
    time: "12 min",
    summary: "Explore how manipulated media can be analysed and why reliable detection is challenging.",
    intro: "Deepfakes are synthetic or manipulated media that may depict people or events in misleading ways. Detection is an active research area involving computer vision, signal analysis, provenance and human judgement.",
    sections: [
      { heading: "How manipulation happens", body: "Media can be altered through face swapping, reenactment, synthetic generation, editing or combinations of techniques. The methods and visual traces vary considerably." },
      { heading: "Detection approaches", body: "Researchers investigate spatial artefacts, temporal inconsistencies, physiological signals, compression patterns and learned representations. No single cue is reliable across all datasets and conditions." },
      { heading: "CNNs and computer vision", body: "Convolutional neural networks can learn visual patterns from labelled examples. Performance depends on dataset quality, diversity, evaluation design and whether test data resembles real deployment conditions." },
      { heading: "Responsible interpretation", body: "A detector's output is not definitive proof. False positives and false negatives are possible, so results should be considered alongside provenance, context and independent evidence." }
    ],
    takeaway: "Deepfake detection is a probabilistic and evolving research problem. Treat automated scores as evidence to investigate, not as a final verdict.",
    exercise: "List three reasons a model trained on one deepfake dataset might perform poorly on videos from a different source."
  },
  {
    slug: "aes-gcm",
    labs: ["aes-gcm"],
    category: "cryptography",
    title: "Symmetric Encryption with AES-GCM",
    level: "Beginner",
    time: "10 min",
    summary: "How AES works as a building block, why the mode of operation matters, and why AES-GCM is today's default.",
    intro: "AES is the symmetric cipher that protects most of the world's data, from HTTPS traffic to encrypted disks and cloud storage. On its own, though, AES only scrambles one 16-byte block. How you chain those blocks together, the mode of operation, decides whether the result is actually secure.",
    sections: [
      { heading: "AES in one paragraph", body: "AES (the Advanced Encryption Standard, FIPS 197) was chosen by NIST in 2001 after an open international competition. It takes a 128-bit block of data and a 128-, 192- or 256-bit key, and runs 10, 12 or 14 rounds of substitution and mixing. No practical attack on full AES is known. Modern processors also have dedicated AES instructions, which make it very fast." },
      { heading: "Why the mode matters", body: "The simplest mode, ECB, encrypts each block independently, so identical plaintext blocks give identical ciphertext blocks and patterns leak straight through. CBC hides patterns, but it needs a separate integrity check and has suffered padding-oracle attacks. CTR turns AES into a stream cipher but offers no tamper detection." },
      { heading: "What GCM adds", body: "Galois/Counter Mode combines counter-mode encryption with an authentication tag computed over the ciphertext and any associated data, such as packet headers. Decryption checks the tag first and refuses to return anything if a single bit has changed. This combination is called authenticated encryption with associated data (AEAD)." },
      { heading: "The nonce rule", body: "Each encryption needs a 96-bit nonce (IV) that must never repeat under the same key. Reusing one lets an attacker recover the XOR of two messages and forge authentication tags. Generate nonces randomly or from a strict counter, and rotate keys long before about four billion messages per key." },
      { heading: "Where you meet it", body: "TLS 1.3 offers only AEAD ciphers: AES-GCM, and ChaCha20-Poly1305 for devices without AES hardware. Cloud key-management services, Wi-Fi WPA3 and many messaging and storage systems use AES-GCM or a close relative." }
    ],
    takeaway: "Use an authenticated mode such as AES-GCM through a well-reviewed library, never reuse a nonce with the same key, and never invent your own mode.",
    exercise: "Open the AES-GCM lab, encrypt the same message twice and explain why the ciphertexts differ. Then flip a bit and explain why decryption fails rather than producing wrong text."
  },
  {
    slug: "post-quantum-cryptography",
    labs: ["ecdh", "digital-signatures"],
    category: "cryptography",
    title: "Post-Quantum Cryptography: What Changes and When",
    level: "Intermediate",
    time: "12 min",
    summary: "Why quantum computers threaten today's public-key cryptography, and what the new NIST standards replace it with.",
    intro: "Almost every secure connection today relies on RSA or elliptic-curve cryptography to agree keys and verify identities. A large enough quantum computer could break both. No such machine exists yet, but data captured today can be stored and decrypted later, so the migration has already begun.",
    sections: [
      { heading: "What quantum computers break", body: "Shor's algorithm would let a large, error-corrected quantum computer factor big numbers and solve discrete logarithms efficiently. That breaks RSA, Diffie-Hellman and elliptic-curve schemes such as ECDH and ECDSA. Symmetric ciphers and hash functions are far less affected: Grover's algorithm roughly halves their effective strength, so AES-256 and SHA-384 or above remain comfortable." },
      { heading: "Harvest now, decrypt later", body: "An adversary can record encrypted traffic today and keep it until a quantum computer is available. Anything that must stay confidential for ten years or more, such as health records, government data or trade secrets, is already at risk. That's why key exchange is being upgraded first." },
      { heading: "The new standards", body: "In August 2024 NIST published three post-quantum standards: ML-KEM (FIPS 203, derived from CRYSTALS-Kyber) for key establishment, ML-DSA (FIPS 204, from CRYSTALS-Dilithium) for signatures, and SLH-DSA (FIPS 205, from SPHINCS+), a hash-based signature scheme used as a conservative backup. A Falcon-based signature standard (FN-DSA) and an additional code-based KEM, HQC, are following." },
      { heading: "Hybrid deployment", body: "Because the new algorithms are young, early deployments combine a classical and a post-quantum algorithm, so the connection stays secure if either one holds. Chrome and other major browsers, together with providers such as Cloudflare, already negotiate the hybrid X25519MLKEM768 key exchange for TLS, and Signal and Apple iMessage have added post-quantum protection to their messaging protocols." },
      { heading: "Costs and planning", body: "Post-quantum keys and signatures are larger: an ML-KEM-768 public key is about 1.2 KB, compared with 32 bytes for X25519. That affects bandwidth, certificates and constrained devices. Organisations are advised to inventory where they use public-key cryptography, favour crypto-agile designs, and follow published transition timelines. NIST has proposed phasing out RSA and ECC for most uses by 2035." }
    ],
    takeaway: "Quantum computing threatens public-key cryptography, not symmetric encryption. The replacements are standardised, hybrid deployment has started, and the practical first step is knowing where your systems use RSA and ECC.",
    exercise: "Pick one system you use at work or study, such as a VPN, a website or an email service. List where it relies on public-key cryptography and which of those uses are most exposed to harvest-now-decrypt-later."
  },
  {
    slug: "tls-1-3",
    labs: ["ecdh", "digital-signatures", "aes-gcm"],
    category: "network-security",
    title: "How HTTPS Works: The TLS 1.3 Handshake",
    level: "Intermediate",
    time: "12 min",
    summary: "Follow a TLS 1.3 connection from the first message to encrypted data, and see how key exchange, certificates and AEAD fit together.",
    intro: "Every HTTPS connection begins with a TLS handshake that agrees fresh keys, proves the server's identity and switches to encryption, usually in a single round trip. TLS 1.3 (RFC 8446, 2018) simplified the protocol and removed a long list of insecure options.",
    sections: [
      { heading: "ClientHello", body: "The browser sends the cipher suites it supports, a random value and, crucially, a key share: an ephemeral elliptic-curve public key (often X25519, increasingly a hybrid with ML-KEM). Sending the key share up front is what lets TLS 1.3 finish in one round trip." },
      { heading: "ServerHello and key agreement", body: "The server picks a cipher suite, replies with its own ephemeral key share, and both sides compute the same shared secret through ECDH. A key schedule built on HKDF turns that secret into separate keys for each direction. From this point on, everything is encrypted." },
      { heading: "Proving identity", body: "The server sends its certificate chain and a CertificateVerify message: a signature over the handshake so far, made with the certificate's private key. The browser checks that the chain leads to a trusted certificate authority, the name matches the site, and the signature verifies. That proves it's talking to the real server and not an interceptor." },
      { heading: "Finished and application data", body: "Both sides send a Finished message containing a MAC over the whole handshake, which detects any tampering with the negotiation. Application data then flows under an AEAD cipher: AES-GCM or ChaCha20-Poly1305." },
      { heading: "What TLS 1.3 removed", body: "Static RSA key transport, which offered no forward secrecy, was dropped, along with CBC-mode ciphers, RC4, SHA-1 and MD5 in signatures, compression and renegotiation. Every connection now has forward secrecy: stealing the server's private key later can't decrypt recorded sessions. The optional 0-RTT resumption mode saves a round trip but can be replayed, so it should only carry requests that are safe to repeat." }
    ],
    takeaway: "TLS 1.3 combines ephemeral key exchange for secrecy, certificate signatures for identity and AEAD encryption for confidentiality and integrity, and the labs on this site let you try each piece separately.",
    exercise: "Open your browser's developer tools on any HTTPS site and find the connection's security details. Identify the protocol version, the key-exchange group and the cipher, and explain each one's role."
  },
  {
    slug: "passwords-mfa-passkeys",
    labs: ["password-strength", "password-hashing"],
    category: "cybersecurity",
    title: "Passwords, MFA and Passkeys",
    level: "Beginner",
    time: "10 min",
    summary: "What current guidance says about passwords, why multi-factor authentication matters, and how passkeys remove phishing from the picture.",
    intro: "Stolen and reused credentials remain one of the most common ways attackers get in. The good news is that the guidance has become simpler and more user-friendly, and phishing-resistant options are now built into every major platform.",
    sections: [
      { heading: "What modern guidance says", body: "NIST SP 800-63B favours length over forced complexity: allow long passphrases, check new passwords against lists of known breached passwords, and stop forcing periodic changes unless there is evidence of compromise. Password managers make unique, random passwords for every site practical." },
      { heading: "How services should store passwords", body: "A service should never store passwords themselves, only a slow, salted hash made with Argon2id, scrypt, bcrypt or PBKDF2 with a high iteration count. If the database leaks, each guess then costs the attacker real time, per user." },
      { heading: "Multi-factor authentication", body: "MFA adds something you have or are to something you know. Even weak MFA blocks most automated attacks, but methods differ: SMS codes can be stolen through SIM-swap fraud, and one-time codes and push approvals can be phished or abused through 'MFA fatigue' prompts." },
      { heading: "Passkeys", body: "Passkeys, based on the FIDO2 and WebAuthn standards, replace the password with a key pair kept on your device or synced through your password manager. The private key never leaves the device, and the browser only uses it on the genuine website, so a look-alike phishing site gets nothing it can use." },
      { heading: "Putting it together", body: "For individuals: use a password manager, turn on MFA everywhere, and switch to passkeys where they're offered. For organisations: enforce phishing-resistant MFA for administrators first, monitor for credential-stuffing, and design account recovery so it doesn't become the weakest link." }
    ],
    takeaway: "Long unique passwords stored by a password manager, phishing-resistant MFA, and passkeys where available stop the large majority of account-takeover attacks.",
    exercise: "Audit one of your own accounts: which MFA methods does it offer, which one are you using, and could you switch to a passkey? Use the password entropy lab to compare a short complex password with a four-word passphrase."
  }
];
