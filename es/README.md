# 📚 Papers Fundamentales de la IA Moderna

Una colección curada de los papers más influyentes que han definido el panorama de la Inteligencia Artificial moderna. Ideal para tener una referencia rápida de los pilares teóricos del Deep Learning.

---

## 🤖 Arquitecturas Transformer y Modelos de Lenguaje (LLMs)

### Attention Is All You Need
- **Autores:** Ashish Vaswani, et al.
- **Año:** 2017
- **Publicación:** [arXiv:1706.03762](https://arxiv.org/abs/1706.03762)
- **Resumen Rápido:** Introduce la arquitectura **Transformer**, basada únicamente en mecanismos de atención. Eliminó la necesidad de recurrencia (RNNs) y permitió una paralelización masiva, sentando las bases para la mayoría de los modelos de lenguaje modernos como GPT y BERT.

---

### BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding
- **Autores:** Jacob Devlin, et al.
- **Año:** 2018
- **Publicación:** [arXiv:1810.04805](https://arxiv.org/abs/1810.04805)
- **Resumen Rápido:** Propuso un método de pre-entrenamiento bidireccional (**BERT**) que permitió a los modelos entender el contexto de una palabra a partir de su entorno izquierdo y derecho. Revolucionó las tareas de Comprensión de Lenguaje Natural (NLU).

---

### Language Models are Unsupervised Multitask Learners (GPT-2)
- **Autores:** Alec Radford, Jeffrey Wu, et al.
- **Año:** 2019
- **Publicación:** [Ver Paper (OpenAI)](https://d4mucfpksywv.cloudfront.net/better-language-models/language-models-are-unsupervised-multitask-learners.pdf)
- **Resumen Rápido:** Demostró la capacidad de los modelos de lenguaje a gran escala (**GPT-2**) para realizar una sorprendente variedad de tareas sin entrenamiento específico (fine-tuning), mostrando un fuerte potencial de aprendizaje *zero-shot*.

---

### Language Models are Few-Shot Learners (GPT-3)
- **Autores:** Tom B. Brown, et al.
- **Año:** 2020
- **Publicación:** [arXiv:2005.14165](https://arxiv.org/abs/2005.14165)
- **Resumen Rápido:** Llevó los LLMs a una escala sin precedentes (175 mil millones de parámetros). Introdujo el concepto de "in-context learning" o aprendizaje *few-shot*, donde el modelo puede aprender a realizar una tarea con solo ver unos pocos ejemplos en el prompt.

---

## 👁️ Visión por Computador y Modelos Generativos

### ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)
- **Autores:** Alex Krizhevsky, Ilya Sutskever, Geoffrey E. Hinton
- **Año:** 2012
- **Publicación:** [Ver Paper (NIPS)](https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf)
- **Resumen Rápido:** Este paper (**AlexNet**) ganó el desafío ImageNet de 2012 por un margen enorme, demostrando la superioridad de las Redes Neuronales Convolucionales (CNNs) profundas y dando inicio a la revolución del Deep Learning.

---

### Deep Residual Learning for Image Recognition (ResNet)
- **Autores:** Kaiming He, et al.
- **Año:** 2015
- **Publicación:** [arXiv:1512.03385](https://arxiv.org/abs/1512.03385)
- **Resumen Rápido:** Introdujo las "conexiones residuales" (*skip connections*), que permitieron entrenar redes neuronales mucho más profundas (más de 150 capas) sin sufrir el problema del gradiente desvaneciente. **ResNet** es una arquitectura fundamental en visión por computador.

---

### Generative Adversarial Nets (GANs)
- **Autores:** Ian J. Goodfellow, et al.
- **Año:** 2014
- **Publicación:** [arXiv:1406.2661](https://arxiv.org/abs/1406.2661)
- **Resumen Rápido:** Presentó un marco de trabajo para entrenar modelos generativos donde dos redes (un **Generador** y un **Discriminador**) compiten entre sí. Esta arquitectura **GAN** revolucionó la generación de imágenes, audio y otros datos realistas.

---

## ⚙️ Optimización

### Adam: A Method for Stochastic Optimization
- **Autores:** Diederik P. Kingma, Jimmy Ba
- **Año:** 2014
- **Publicación:** [arXiv:1412.6980](https://arxiv.org/abs/1412.6980)
- **Resumen Rápido:** Propone el optimizador **Adam**, que adapta la tasa de aprendizaje para cada parámetro combinando las ventajas de otros métodos como AdaGrad y RMSProp. Se convirtió rápidamente en el optimizador por defecto para la mayoría de las aplicaciones de Deep Learning.

---

## 🎮 Aprendizaje por Refuerzo (Reinforcement Learning)

### Playing Atari with Deep Reinforcement Learning (DQN)
- **Autores:** Volodymyr Mnih, et al.
- **Año:** 2013
- **Publicación:** [arXiv:1312.5602](https://arxiv.org/abs/1312.5602)
- **Resumen Rápido:** Fue el primer paper en combinar exitosamente el Aprendizaje por Refuerzo con una red neuronal profunda (CNN) para crear un agente general (**DQN**) que aprendió a jugar videojuegos de Atari a nivel sobrehumano, recibiendo únicamente los píxeles de la pantalla como entrada.
