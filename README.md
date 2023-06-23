# prg8-week3-her
herkansing van weekopdracht 3, programmeren 8

Waar heb je de feature extractor op getraind? (Wat kan er herkend worden dat je niet met de basis image classifier kan herkennen?)
ik heb de feature extractor getraind op het herkennen van honden en katten. Met een zelf getrainde feature extractor kun je mogelijk complexere en specifiekere patronen en kenmerken in afbeeldingen herkennen dan met een basis image classifier. Een feature extractor leert diepere niveaus van representaties van afbeeldingen, terwijl een basis classifier zich richt op algemene categorieën.

Hoe kan je een model opslaan? Is dat jou gelukt?
Met de saveModel()-functie in de code akn ik het getrainde model opslaan. Wanneer het model getraind is en isModelTrained is ingesteld op true, wordt de classifier.save()-methode aangeroepen. Dit slaat het model op, zodat je het later kunt laden en gebruiken zonder opnieuw te hoeven trainen. Het opgeslagen model kan worden gebruikt om voorspellingen te doen op nieuwe afbeeldingen zonder de training opnieuw uit te voeren. hegt is mij gelukt om het model op te slaan

Kan je het model inladen in een aparte webpage?
ja het is mij gelukt het model op een andere webpagina in te laden. De code laadt het model in door de imageClassifier()-functie van ml5.js te gebruiken en de classificatie uit te voeren met behulp van de classify()-methode van het geladen model. Het resultaat wordt vervolgens weergegeven in het HTML-element met het ID "imageResult".

Welk algoritme wordt gebruikt in deze toepassing van ML5?
Het algoritme voor beeldclassificatie wordt hier gebruikt. Het specifieke algoritme dat ML5.js gebruikt voor beeldclassificatie is een neuraal netwerk.

Wat is de data waarmee je algoritme wordt getraind?
Het wordt getraind op visuele kenmerken, zoals vormen, texturen, kleuren en objecten, waardoor het in staat is om informatie uit afbeeldingen te extraheren. oftewel afbeeldingen.

Hoe goed is jouw toepassing in het herkennen van het onderwerp waarop je getraind hebt? Hoe zou je dit nog kunnen verbeteren?
Mijn toepassing is best goed in het herkennen van honden en katten en heeft bij sommige afbeeldingen zelfs 100% accuracy, dit zoiu ik nog kunnen verbetern door meer verschillende rassen van honden en katten toe te voegen en ook vanuit verschillende posities genomen! Zodat het model nog beter verschillende honden en katten kan herkennen.

Is het je gelukt om gameplay en een score aan je app toe te voegen?
De app geeft een score aan aan de hand van hoe herkenbaar de foto is die jij hebt gegeven! Dit doet hij aan de hand van het percentage herkenning in de foto.
