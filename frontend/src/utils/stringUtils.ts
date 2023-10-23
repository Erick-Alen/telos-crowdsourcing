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

  static getRemainingDays = (finalDate: string) => {
    const currentDateObject = new Date();
    const finalDateObject = new Date(finalDate);
    finalDateObject.setUTCHours(finalDateObject.getUTCHours() + 3);
    const dateDiff = finalDateObject.getTime() - currentDateObject.getTime();
    const daysRemaining = Math.floor(dateDiff / (1000 * 3600 * 24));

    if(daysRemaining < 1){
      const hoursRemaining = Math.floor(dateDiff / (1000 * 3600));
      return `${hoursRemaining} hours`
    } else if (daysRemaining === 1) {
      return `${daysRemaining} day`;
    } else  if (daysRemaining > 1){
      return `${daysRemaining} days`;
    } else {
      return "No days";
    }
  }
}
