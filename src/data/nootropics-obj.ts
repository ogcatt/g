export const noots = {
    "bromantane": {
        name: "Bromantane",
        other_names: [
            "Bromantan",
            "Ladasten"
        ],
        recommended_roa: "Intranasal",
        soluble_in: ["Caprylic Acid"],
        smiles: "C1C2CC3CC1CC(C2)C3NC4=CC=C(C=C4)Br",
        zinc: "ZINC000002577057",
        rating: 7
    },
    "tak-653": {
        name: "TAK-653",
        other_names: [
            "UNII-9E3TOE5RIZ"
        ],
        recommended_roa: "Oral",
        soluble_in: ["PEG-400"],
        smiles: "CC1=CN2CCS(=O)(=O)N=C2C(c2ccc(OC3CCCCC3)cc2)=N1",
        zinc: "ZINC000114246812",
        rating: 8
    },
    "tropisetron": {
        name: "Tropisetron",
        other_names: [
            "Tropisetronum",
            "Novaban",
            "UNII-6I819NIK1W"
        ],
        recommended_roa: "Oral",
        soluble_in: ["Type 2 Deionized Water"],
        smiles: "CN1[C@H]2CC[C@@H]1C[C@@H](C2)OC(=O)c1c[nH]c2ccccc12",
        zinc: "ZINC000100019233",
        rating: 7
    },
    "neboglamine": {
        name: "Neboglamine",
        other_names: ["Nebostinel"],
        recommended_roa: "Oral or IN",
        soluble_in: ["Propylene Glycol"],
        smiles: "CC1(C)CCC(CC1)NC(=O)[C@@H](N)CCC(O)=O",
        zinc: "ZINC000000006138",
        rating: 9
    },
    "ac-rer": {
        name: "Ac-rER",
        other_names: ["Ac-RER"],
        recommended_roa: "Oral",
        soluble_in: [],
        smiles: "",
        zinc: "",
        rating: 9
    },
    "agmatine-sulfate": {
        name: "Agmatine Sulfate",
        other_names: ["Agmatine"],
        recommended_roa: "Oral",
        soluble_in: ["Water"],
        smiles: "C(CCN=C(N)N)CN.OS(=O)(=O)O",
        zinc: "",
        rating: 6
    },
    "srt-2104": {
        name: "SRT-2104",
        other_names: [
            "GSK2245840",
            "1093403-33-8"
        ],
        recommended_roa: "Intranasal/Oral?",
        soluble_in: [],
        smiles: "CC1=C(SC(=N1)C2=CN=CC=C2)C(=O)NC3=CC=CC=C3C4=CN5C(=CSC5=N4)CN6CCOCC6",
        zinc: "",
        rating: 0
    },
    "acd855": {
        name: "ACD855",
        other_names: [
            "ACD-855",
        ],
        recommended_roa: "Oral?",
        soluble_in: [],
        smiles: "CN1C(=O)NC(=O)N(C1=O)C1=CC=C(OC2=CC=C(C=C2)S(=O)(=O)C(F)(F)F)C(C)=C1",
        zinc: "",
        rating: 4
    }
};



//// EXAMPLE ENTRY //// ACD856

// Slashes (/) show available options for a value

const example = {
    "lowercase-codename": {
        name: "Standard Name",
        other_names: [
            "Other Name",
            "Other Name 2"
        ],
        recommended_roa: "Oral/Intranasal/Sublingual/Intramuscular",
        soluble_in: ["solvent1", "solvent2"],
        smiles: "smiles code goes here (empty if none or unknown)",
        zinc: "ZINC000000000000",
        rating: 1 // 0 = Unknown. 12345678910 = F, E, D, D+, C, C+, B, A, S, S+
    }
}
