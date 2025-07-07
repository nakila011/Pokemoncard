import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Charmander Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Charmander</Text>
          <Text style={styles.hp}>❤️ HP: 39</Text>
        </View>

        <Image
          source={require("@/assets/images/charmander1.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#f97316" }]}>
          <Text style={[styles.typeText, { color: "#f97316" }]}>🔥 Fire</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>Scratch, Ember, Growl, Leer</Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Water, Rock</Text>
      </View>

      {/* Pikachu Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Pikachu</Text>
          <Text style={styles.hp}>⚡ HP: 35</Text>
        </View>

        <Image
          source={require("@/assets/images/pikachu2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#facc15" }]}>
          <Text style={[styles.typeText, { color: "#facc15" }]}>⚡ Electric</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Thunder Shock, Quick Attack, Tail Whip, Electro Ball
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Ground</Text>
      </View>

      {/* Mewtwo Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Mewtwo</Text>
          <Text style={styles.hp}>🧠 HP: 106</Text>
        </View>

        <Image
          source={require("@/assets/images/mewtwo.jpg")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#a78bfa" }]}>
          <Text style={[styles.typeText, { color: "#a78bfa" }]}>🔮 Psychic</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Psychic, Shadow Ball, Recover, Barrier
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Ghost, Dark</Text>
      </View>

      {/* Zekrom Card */}
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.name}>Zekrom</Text>
          <Text style={styles.hp}>🧠 HP: 76</Text>
        </View>

        <Image
          source={require("@/assets/images/Zekrom.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={[styles.typeBadge, { borderColor: "#000" }]}>
          <Text style={[styles.typeText, { color: "#000" }]}>🪨 Rock</Text>
        </View>

        <Text style={styles.sectionLabel}>Moves:</Text>
        <Text style={styles.sectionText}>
          Rock, Solid Ball, Heals, Barrier
        </Text>

        <Text style={styles.sectionLabel}>Weakness:</Text>
        <Text style={styles.sectionText}>Bug, Ghost, Poison</Text>
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 16,
    color: "red",
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 160,
    marginVertical: 12,
    borderRadius: 21,
  },
  typeBadge: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  typeText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionLabel: {
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionText: {
    marginBottom: 4,
  },
});