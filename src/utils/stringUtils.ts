export class stringUtils{
  private static bindingParticles = ['de', 'da', 'do', 'dos', 'das']
  private static capitalizeFirstCharacter(text: string): string {
    return  text.charAt(0).toUpperCase() + text.slice(1);
  }
  static capitalizeFirstCharacterName(name: string): string {
    return name.trim().split(" ").
      map(word => this.bindingParticles.includes(word) ? word : this.capitalizeFirstCharacter(word)).join(" ");
  }

  static capitalizeFirstCharacterText(text: string): string{
    return this.capitalizeFirstCharacter(text)
  }
}
