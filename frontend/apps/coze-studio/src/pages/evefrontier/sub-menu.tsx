/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { WorkspaceSubMenu as BaseWorkspaceSubMenu } from '@coze-foundation/space-ui-base';
import { I18n } from '@coze-arch/i18n';
import { useRouteConfig } from '@coze-arch/bot-hooks';
import {
  IconCozBot,
  IconCozBotFill,
} from '@coze-arch/coze-design/icons';

export const EveFrontierSubMenu = () => {
  const { subMenuKey } = useRouteConfig();

  const subMenu = [
    {
      icon: <IconCozBot />,
      activeIcon: <IconCozBotFill />,
      title: () => I18n.t('evefrontier_path_planning', {}, 'Path Planning'),
      path: 'path-planning',
      dataTestId: 'evefrontier_path_planning',
    },
  ];

  return (
    <BaseWorkspaceSubMenu
      menus={subMenu}
      currentSubMenu={subMenuKey}
    />
  );
};
