/*
 * @Author: Vir
 * @Date: 2021-09-23 11:39:25
 * @Last Modified by: Vir
 * @Last Modified time: 2021-09-24 14:23:31
 */

import { editAccount } from '@/apis/auth';
import Select from '@/components/md-custom/form/select';
import {
  AuthBackground,
  AuthBackgroundType,
  AuthData,
} from '@/data/account/default';
import ItemAccordion from '@/pages/setting/components/itemAccordion';
import { Alert, SelectChangeEvent } from '@material-ui/core';
import React from 'react';
import { getAccount } from '../../auth/utils/acount';
import Random from './random';
import './styles/background.style.less';

export interface BgOptions {
  label: string;
  value: AuthBackgroundType;
  canSelect?: boolean;
}

const Background: React.FC = () => {
  const [value, setValue] = React.useState<BgOptions>({} as BgOptions); // 选择背景类型
  const [selected, setSelected] = React.useState<AuthBackgroundType>('color');
  const [account, setAccount] = React.useState<AuthData>({} as AuthData); // 当前账户
  const [userBgSetting, setUserBgSetting] = React.useState<AuthBackground>(
    {} as AuthBackground,
  ); // 当前账户的背景设置数据
  const [expanded, setExpanded] = React.useState(false);

  const bgOptions: BgOptions[] = [
    { label: '纯色', value: 'color', canSelect: false },
    { label: '必应壁纸', value: 'random', canSelect: true },
    { label: '每日一图', value: 'everyday', canSelect: false },
    { label: '在线图片', value: 'link', canSelect: false },
  ];

  // 更新设置
  const updateBgSetting = (id: string, setting: AuthBackground) => {
    editAccount(id, {
      background: setting,
    });
  };

  // 选择背景类型
  const handleChange = (event: SelectChangeEvent<any>) => {
    const selected: AuthBackgroundType = event.target.value;
    const data = bgOptions.find((i) => i.value === selected);
    if (!data) return;
    setSelected(selected);
    setValue(data);
    setExpanded(true);
    if (data.canSelect === true) {
      const setting = {
        type: selected,
      };
      account._id && updateBgSetting(account._id, setting);
      setUserBgSetting(setting);
    }
  };

  // 初始化背景设置
  const init = () => {
    const data: AuthData = getAccount();
    setAccount(data);
    if (data && data.background) {
      const type = data.background.type;
      const option = bgOptions.find((i) => i.value === type);
      setValue(option || bgOptions[0]);
      setSelected(type || bgOptions[0].value);
      setUserBgSetting(data.background);
    } else {
      data._id &&
        updateBgSetting(data._id, {
          type: bgOptions[0].value,
        });
      setValue(bgOptions[0]);
      setSelected(bgOptions[0].value);
      setUserBgSetting({ type: bgOptions[0].value });
    }
  };

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <ItemAccordion
        expanded={expanded}
        onChange={(_, expanded) => {
          setExpanded(expanded);
        }}
        title="个性化设置背景"
        desc="背景设置主要适用于主页"
        action={
          <Select
            label="背景类型"
            value={selected}
            size="small"
            onChange={handleChange}
            options={bgOptions}
          />
        }
        disableDetailPadding
      >
        {value.value === 'color' && (
          <Alert severity="info">纯色背景设置将在未来支持</Alert>
        )}
        {value.value === 'random' && (
          <Random
            data={userBgSetting.data}
            onChange={(data) => {
              if (userBgSetting.type === 'random') {
                const setting = { ...userBgSetting, data };
                setUserBgSetting(setting);
                account._id && updateBgSetting(account._id, setting);
              }
            }}
          />
        )}
        {value.value === 'everyday' && (
          <Alert severity="info">每日一图背景设置将在未来支持</Alert>
        )}
        {value.value === 'link' && (
          <Alert severity="info">在线图片背景设置将在未来支持</Alert>
        )}
      </ItemAccordion>
    </div>
  );
};

export default Background;