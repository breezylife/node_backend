import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { TaskRoute } from '@routes/tasks.route';
import { TeamRoute } from '@routes/teams.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new TaskRoute(), new TeamRoute()]);

app.listen();
