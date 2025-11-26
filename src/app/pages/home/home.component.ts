import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, AboutSectionComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  subtitle = "Vish. Kthe. Përsërit.";
  title = "HUAZO";
  description = "E gjithë garderoba juaj  në një aplikacion.";
  secondLine = "Mos e lë të mbledhë pluhur — publikoje në Huazo";
  tagline = "Mos e lë të mbledhë pluhur — publikoje në Huazo";
  dressImagePath = "assets/images/Dress.png";
  screen1Path = "assets/images/screen1.jpg";
  screen2Path = "assets/images/screen2.jpg";
}
