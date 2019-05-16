import dva from 'dva';
import './index.css';
import VConsole from "vconsole/dist/vconsole.min.js"
new VConsole();
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
// app.model(require('./models/dialogs').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
