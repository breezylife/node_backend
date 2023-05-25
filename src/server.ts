import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { TaskRoute } from '@routes/tasks.route';
import { TeamRoute } from '@routes/teams.route';
import { MemberRoute } from '@routes/members.route';
import { StatusRoute } from '@routes/status.route';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new TaskRoute(), new TeamRoute(), new MemberRoute(), new StatusRoute()]);

app.listen();
