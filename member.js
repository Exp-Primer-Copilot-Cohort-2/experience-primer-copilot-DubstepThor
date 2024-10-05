function skillsMember() {
  return {
    skills: ['React', 'Vue', 'Angular'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}