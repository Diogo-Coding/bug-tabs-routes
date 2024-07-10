import { createAnimation } from "@ionic/vue";

export const fadeAnimation = (baseEl, opts) => {
  const animation = createAnimation()
    .addElement(baseEl)
    .duration(350) // Duración total de la animación en milisegundos
    .easing("ease-in"); // Tipo de función de temporización (por ejemplo: 'ease', 'linear', 'ease-in-out', etc.)

  const enterTransition = createAnimation().addElement(opts.enteringEl);
  const exitTransition = createAnimation().addElement(opts.leavingEl);

  // Animación de salida de la página actual
  exitTransition.fromTo("opacity", 1, 0); // De opacidad 1 a opacidad 0 para la página actual
  exitTransition.duration(150); // Duración de la animación de salida en milisegundos

  // Animación de entrada de la nueva página
  enterTransition.fromTo("opacity", 0, 1); // De opacidad 0 a opacidad 1 para la nueva página
  enterTransition.duration(150); // Duración de la animación de entrada en milisegundos
  enterTransition.beforeStyles({ opacity: "0" }); // Establecer la opacidad inicial de la nueva página en 0
  enterTransition.afterStyles({ opacity: "1" }); // Establecer la opacidad final de la nueva página en 1
  enterTransition.delay(150); // Agregar una pausa de 100 milisegundos entre las animaciones

  animation.addAnimation(exitTransition);
  animation.addAnimation(enterTransition);

  return animation;
};