const path = require("path"); // модуль nodejs для корректной обработки путей
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Плагин для генерации HTML с правильными путями к скриптам
const FileManagerPlugin = require("filemanager-webpack-plugin"); // автоматическая очистка каталогов
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // извлекаем CSS из файлов .js при сборке

module.exports = {
  entry: {
    bundle: "./src/index.tsx", // Основной файл для React с TypeScript
  },

  output: {
    filename: "index[contenthash].js", // // Имя итогового бандла, используем contenthash для динамических хешей
    path: path.join(__dirname, "dist"), // Папка для собранных файлов
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
    clean: true, // Очищать старые файлы при сборке
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"], // Поддерживаемые расширения
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/, // Обработка TypeScript файлов
        use: "ts-loader", // Используем ts-loader для компиляции TypeScript
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/, // Обработка JS файлов через Babel
        use: "babel-loader", // Используем babel-loader для JS
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          attrs: ["img:src", "source:srcset"],
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|webp|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("icons", "[name].[contenthash][ext]"),
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Указываем исходный HTML-шаблон
      inject: "body", // Скрипты будут вставляться перед закрывающим тегом </body>
      filename: "index.html", // Имя итогового HTML файла
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:6].css",
    }),
  ],
  performance: {
    hints: false, // не отображаются предупреждения и ошибоки по производительности
  },
  devServer: {
    historyApiFallback: true, // необходимо при испольтзовании React Router для маршрутизации
    watchFiles: path.join(__dirname, "src"), // указывает на каталог src, за которыми будет вестись наблюдение
    port: 5173, // указывает порт на котором будет работать веб-сервер
    hot: true, // Включаем HMR (горячую замену модулей)
  },
};
