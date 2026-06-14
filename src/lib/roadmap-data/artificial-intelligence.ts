import type { RoadmapTopic } from "../roadmaps";

export const artificialIntelligence: RoadmapTopic[] = [
  {
    slug: "python-for-ai",
    title: "Python for AI & Data",
    icon: "🐍",
    summary: "The Python habits every AI engineer relies on: lists, vectorized thinking, and filtering.",
    lessons: [
      {
        slug: "printing-data",
        title: "Printing a Dataset",
        body: [
          "AI work starts with data — often just a list of numbers. Printing it shows its structure before you process it further.",
        ],
        challenge: {
          language: "python",
          prompt: "Create a list `scores` containing 85, 90, 78, 92 and print it.",
          starterCode: `# TODO: create scores = [85, 90, 78, 92] and print it`,
          expectedOutput: "[85, 90, 78, 92]",
          hint: "scores = [85, 90, 78, 92]\nprint(scores)",
        },
      },
      {
        slug: "vectorized-thinking",
        title: "Vectorized Thinking",
        body: [
          "Libraries like NumPy apply an operation to every element of an array at once ('vectorized'), instead of a manual loop. A list comprehension mimics this.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `boost` so it returns a new list where every value in `values` is multiplied by `factor`. Test it on [85, 90, 78, 92] with factor=2.",
          starterCode: `def boost(values, factor):\n    # TODO: return a new list with each value multiplied by factor\n    pass\n\nscores = [85, 90, 78, 92]\nprint(boost(scores, 2))`,
          expectedOutput: "[170, 180, 156, 184]",
          hint: "Use a list comprehension: [v * factor for v in values]",
        },
      },
      {
        slug: "filtering-data",
        title: "Filtering Data",
        body: [
          "Filtering — keeping only values that meet a condition — is a constant task before training a model, e.g. removing outliers or invalid rows.",
        ],
        challenge: {
          language: "python",
          prompt: "Print a list of the values in `data` that are greater than 10.",
          starterCode: `data = [5, 12, 8, 20, 3, 15]\n# TODO: print a list of values greater than 10`,
          expectedOutput: "[12, 20, 15]",
          hint: "[v for v in data if v > 10]",
        },
      },
    ],
  },
  {
    slug: "math-for-ml",
    title: "Math & Statistics for ML",
    icon: "📐",
    summary: "Linear algebra, statistics, and gradients — the language machine learning is written in.",
    lessons: [
      {
        slug: "vectors-and-dot-products",
        title: "Vectors & Dot Products",
        body: [
          "Data in ML is represented as vectors. The dot product — summing the products of matching elements — is the core operation a neural network uses to combine inputs with weights.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `dot_product(a, b)` so it returns the sum of a[i] * b[i] for every index. Test it on a=[5, 1, 4] and b=[2, 3, 1].",
          starterCode: `def dot_product(a, b):\n    # TODO: return the sum of a[i] * b[i] for each index i\n    pass\n\na = [5, 1, 4]\nb = [2, 3, 1]\nprint(dot_product(a, b))`,
          expectedOutput: "17",
          hint: "sum(x * y for x, y in zip(a, b))",
        },
      },
      {
        slug: "mean-and-variance",
        title: "Mean & Variance",
        body: [
          "The mean is the average value of a dataset — the simplest summary of where its values are centered.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `mean(values)` so it returns the average of a list, then print mean([10, 20, 30, 40]).",
          starterCode: `def mean(values):\n    # TODO: return the average of values\n    pass\n\nprint(mean([10, 20, 30, 40]))`,
          expectedOutput: "25.0",
          hint: "sum(values) / len(values)",
        },
      },
      {
        slug: "gradients-intuition",
        title: "Gradients (Intuition)",
        body: [
          "Training a model means repeatedly nudging its parameters to reduce error. One gradient descent step: new_value = value - learning_rate * gradient.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `step(value, gradient, lr)` so it returns value - lr * gradient, then print step(10, 4, 0.5).",
          starterCode: `def step(value, gradient, lr):\n    # TODO: return value - lr * gradient\n    pass\n\nprint(step(10, 4, 0.5))`,
          expectedOutput: "8.0",
          hint: "value - lr * gradient",
        },
      },
    ],
  },
  {
    slug: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    icon: "🤖",
    summary: "Splitting data, measuring accuracy, and spotting overfitting.",
    lessons: [
      {
        slug: "train-test-split",
        title: "Train/Test Split",
        body: [
          "Before training, data is split into a training set (to learn from) and a test set (to evaluate on unseen data) — commonly an 80/20 split.",
        ],
        challenge: {
          language: "python",
          prompt: "Given a list of 10 items, print the first 8 (an 80% training split).",
          starterCode: `data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n# TODO: print the first 8 items`,
          expectedOutput: "[1, 2, 3, 4, 5, 6, 7, 8]",
          hint: "data[:8]",
        },
      },
      {
        slug: "accuracy",
        title: "Accuracy",
        body: [
          "Accuracy is the fraction of predictions that match the true labels — the simplest way to score a classifier.",
        ],
        challenge: {
          language: "python",
          prompt: "Given `predictions` and `labels`, print the accuracy as (number correct) / (total).",
          starterCode: `predictions = [1, 0, 1, 1, 0]\nlabels =      [1, 0, 0, 1, 0]\n# TODO: print the accuracy: correct / total`,
          expectedOutput: "0.8",
          hint: "sum(p == l for p, l in zip(predictions, labels)) / len(labels)",
        },
      },
      {
        slug: "overfitting",
        title: "Overfitting",
        body: [
          "Overfitting is when a model memorizes training data instead of learning general patterns — high accuracy on training data but a big drop on test data.",
        ],
        challenge: {
          language: "python",
          prompt: "Given `train_acc` and `test_acc` as percentages, print whether the gap (train_acc - test_acc) is greater than 20 — a sign of overfitting.",
          starterCode: `train_acc = 95\ntest_acc = 65\n# TODO: print whether (train_acc - test_acc) > 20`,
          expectedOutput: "True",
          hint: "print(train_acc - test_acc > 20)",
        },
      },
    ],
  },
  {
    slug: "neural-networks-intro",
    title: "Intro to Neural Networks",
    icon: "🧠",
    summary: "Neurons, activations, and the forward pass — the building blocks of deep learning.",
    lessons: [
      {
        slug: "neurons-and-weights",
        title: "Neurons & Weights",
        body: [
          "A neuron computes a weighted sum of its inputs, then applies an activation function. The weighted sum is just a dot product.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `weighted_sum(inputs, weights)` so it returns the sum of inputs[i] * weights[i], then print weighted_sum([1, 2], [3, 4]).",
          starterCode: `def weighted_sum(inputs, weights):\n    # TODO: return the sum of inputs[i] * weights[i]\n    pass\n\nprint(weighted_sum([1, 2], [3, 4]))`,
          expectedOutput: "11",
          hint: "sum(i * w for i, w in zip(inputs, weights))",
        },
      },
      {
        slug: "activation-functions",
        title: "Activation Functions",
        body: [
          "An activation function decides how strongly a neuron 'fires'. ReLU is the simplest and most common: output the input if positive, else 0.",
        ],
        challenge: {
          language: "python",
          prompt: "Complete `relu(x)` so it returns x if x > 0, else 0. Print relu(-5) and relu(3) on separate lines.",
          starterCode: `def relu(x):\n    # TODO: return x if x > 0 else 0\n    pass\n\nprint(relu(-5))\nprint(relu(3))`,
          expectedOutput: "0\n3",
          hint: "return x if x > 0 else 0",
        },
      },
      {
        slug: "layers-and-forward-pass",
        title: "Layers & Forward Pass",
        body: [
          "A layer applies many neurons to the same input. A forward pass runs input through each layer in sequence to produce a prediction.",
        ],
        challenge: {
          language: "python",
          prompt: "Apply `relu` to every value in `layer_output` and print the resulting list.",
          starterCode: `def relu(x):\n    return x if x > 0 else 0\n\nlayer_output = [-2, 5, -1, 3, 0]\n# TODO: print [relu(x) for x in layer_output]`,
          expectedOutput: "[0, 5, 0, 3, 0]",
          hint: "[relu(x) for x in layer_output]",
        },
      },
    ],
  },
];
