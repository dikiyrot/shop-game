import React from "react";
import styles from "./HomePage.module.scss";
import { GameItem } from "../../components/GameItem";

const GAMES = [
  {
    image: "/shop-game/game-covers/forza_5.jpeg",
    title: "Forza Horizon 5",
    genres: ["Race", "Simulator", "Open world"],
    price: 25,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "You are waiting for an endless kaleidoscope adventure Horizon!Make exciting trips to the incredibly beautiful and distinctive world of Mexico behind the steering of the greatest cars in history.Start your Horizon adventure today by adding the game to your wish list.!",
  },
  {
    image: "/shop-game/game-covers/battlefield_2042.jpg",
    title: "Battlefield 2042",
    genres: ["Action", "Shooter", "War"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 30,
    id: 2,
    description:
      "Battlefield™ 2042 — This is a first-person shooter, in which the series returns to the legendary large-scale battles.In the future, where chaos reigns, adapt and flourish on constantly changing battlefields due to their detachment and the arsenal of the newest technologies.",
  },
  {
    image: "/shop-game/game-covers/life_is_strange_true_colors.jpeg",
    title: "Life is Strange True Colors",
    genres: ["Deep plot", "Protagonist"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 45,
    id: 3,
    description:
      "Alex Chen from all hides its "curse" - the supernatural ability to read the strong emotions of others and influence them.But when her brother dies - allegedly as a result of an accident, - Alex uses it to learn the truth.",
  },
  {
    image: "/shop-game/shop-game/game-covers/gta_v.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Open world", "Action"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 15,
    id: 4,
    description:
      "GRAND THEFT AUTO V for PC allows players to explore the famous world of Los Santos and Blaine County in resolution up to 4K and above with a frequency of 60 frames per second.",
  },
  {
    image: "/shop-game/game-covers/rainbow_siege.jpeg",
    title: "Tom Clancy's Rainbow Six® Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Tactics", "Shooter"],
    price: 20,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six Siege is a continuation of the sensational shooter from the first person developed by the studio Ubisoft Montreal.",
  },
  {
    image: "/shop-game/game-covers/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Parkur", "Rpg", "Open world"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 33,
    id: 6,
    description:
      "Assassin’s Creed Valhalla —Multiplatform computer game in the Action / RPG genre, developed by the Ubisoft Montreal studio under Ubisoft Publishing House.Is the twelfth game in the series Assassin's Creed.",
  },
];

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {GAMES.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
