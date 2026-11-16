export const tutorials = [
  {
    slug: "cia-triad",
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
  }
];
